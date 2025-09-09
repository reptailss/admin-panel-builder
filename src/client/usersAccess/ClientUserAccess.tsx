import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Stack from "@mui/material/Stack";
import {useRequest} from "@client/requests/hooks/useRequest";
import {AuthClientHelper} from "@client/auth/helper/AuthClientHelper";
import {Spinner} from "@client/ui/spinner/Spinner";
import sx from './sx'
import {Grid, Pagination} from "@mui/material";
import {usePaginationCustom} from "@client/pagination/usePaginationCustom";
import {useClientAccessContext} from "@client/access/context/useClientAccessContext";
import {NotAccessSimple} from "@client/access/notAccess/NotAccessSimple";
import {ClientGuardActions} from "@client/helpers/ClientGuardActionsHelper";
import {OnEditAccess, OnSaveAccess} from "@client/usersAccess/types/events";
import {ClientAccessItem} from "@client/usersAccess/item/ClientAccessItem";
import {ClientMutateAccessModal} from "@client/usersAccess/mutateAccess/ClientMutateAccessModal";
import {IAccessManager} from "@accessManager/interfaces";

export const ClientUserAccess = ({
									 accessManager
								 }: {
	accessManager: IAccessManager<any>
}) => {
	const [page, setPage] = useState<number>(1)
	const [users, setUsers] = useState<any[]>([])
	const [openMutatePostModal, setOpenMutatePostModal] = useState<boolean>(false)
	const [targetUserInfo, setTargetUserInfo] = useState<any | null>(null)
	const [targetUserRoles, setTargetUserRoles] = useState<string[] | null>(null)
	const [allRoles, setAllRoles] = useState<Array<string | {
		value: string
		label: string
	}>>([])
	
	const {
		onRequest,
		isLoading
	} = useRequest()
	
	const {
		totalPage,
		paginationData
	} = usePaginationCustom({
		page,
		data: users,
		perPage: 20,
	})
	
	const {roles} = useClientAccessContext()
	
	const fetchUsers = useCallback(async () => {
		await onRequest(async () => {
			const res = await accessManager.provider.getUsers({
				token: AuthClientHelper.getAccessToken()
			})
			setUsers(res || [])
		})
	}, [accessManager])
	
	
	const onDeleteAccess = useCallback(async () => {
		await onRequest(async () => {
			await accessManager.provider.deleteUserRoles({
				userInfo: targetUserInfo,
				token: AuthClientHelper.getAccessToken()
			})
			onCloseMutateAccessModal()
			await fetchUsers()
		})
	}, [accessManager, targetUserInfo])
	
	const onSaveAccess: OnSaveAccess = useCallback(async (roles) => {
		await onRequest(async () => {
			await accessManager.provider.saveUserRoles({
				userInfo: targetUserInfo,
				roles,
				token: AuthClientHelper.getAccessToken(),
			})
			
			onCloseMutateAccessModal()
			await fetchUsers()
		})
	}, [accessManager, targetUserInfo])
	
	const onEditAccess: OnEditAccess = useCallback(async (userInfo) => {
		await onRequest(async () => {
			const res = await accessManager.provider.getUserRoles({
				userInfo,
				token: AuthClientHelper.getAccessToken()
			})
			setTargetUserRoles(res?.roles || [])
			setTargetUserInfo(userInfo)
			setOpenMutatePostModal(true)
		})
	}, [accessManager])
	
	const onCloseMutateAccessModal = useCallback(() => {
		setOpenMutatePostModal(false)
		setTargetUserRoles(null)
		setTargetUserInfo(null)
	}, [])
	
	const userPreviewFields = useMemo(() => {
		return accessManager.getUserPreviewFields()
	}, [accessManager])
	
	const guards: {
		read: boolean
		save: boolean
		delete: boolean
	} = useMemo(() => {
		const globalRoles = accessManager.getGlobalActionRoles()
		const rolesByTypes = accessManager.getActionsRolesByTypes()
		return {
			read: ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.read,
				userRoles: roles,
			}),
			save: ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.save,
				userRoles: roles,
			}),
			delete: ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.delete,
				userRoles: roles,
			}),
		}
	}, [accessManager, roles])
	
	useEffect(() => {
		const init = async () => {
			fetchUsers()
			const res = await onRequest(() => {
				return accessManager.provider.getAllRoles({
					token: AuthClientHelper.getAccessToken(),
				})
			})
			setAllRoles(res?.roles || [])
		}
		init()
	}, [])
	
	if (isLoading) {
		return (
			<Spinner variant={'overlay'}/>
		)
	}
	
	if (!guards.read) {
		return (
			<NotAccessSimple/>
		)
	}
	
	return (
		<Stack
			gap={1}
			sx={sx.root}
		>
			
			<ClientMutateAccessModal
				initial={targetUserRoles}
				onSaveAccess={onSaveAccess}
				allRoles={allRoles}
				onCloseModal={onCloseMutateAccessModal}
				openModal={openMutatePostModal}
				guards={guards}
				onDeleteAccess={onDeleteAccess}
			/>
			
			<Grid
				container
				spacing={2}
			>
				{paginationData.map((userInfo, index) => {
					return (
						<Grid
							size={{
								xs: 12,
								lg: 6,
							}}
							key={index}
						>
							<ClientAccessItem
								userInfo={userInfo}
								onEditAccess={onEditAccess}
								userPreviewFields={userPreviewFields}
								guards={guards}
							/>
						</Grid>
					)
				})}
			</Grid>
			
			{totalPage > 1 && <Pagination
                count={totalPage}
                page={totalPage >= page ? page : totalPage}
                onChange={(e, value) => setPage(value)}
                sx={{display: 'flex', justifyContent: 'center', marginTop: '8px'}}
                color="primary"
            />}
		</Stack>
	);
};

