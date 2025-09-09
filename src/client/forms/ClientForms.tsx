import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Stack from "@mui/material/Stack";
import {useRequest} from "@client/requests/hooks/useRequest";
import {AuthClientHelper} from "@client/auth/helper/AuthClientHelper";
import {Spinner} from "@client/ui/spinner/Spinner";
import sx from './sx'
import {IFormManager} from "@formManager/interfaces";
import {Grid, Pagination} from "@mui/material";
import {usePaginationCustom} from "@client/pagination/usePaginationCustom";
import {useClientAccessContext} from "@client/access/context/useClientAccessContext";
import {NotAccessSimple} from "@client/access/notAccess/NotAccessSimple";
import {ClientGuardActions} from "@client/helpers/ClientGuardActionsHelper";
import {OnDeleteForm, OnEditForm, OnSaveForm} from "@client/forms/types/events";
import {ClientMutateFormModal} from "@client/forms/mutateForm/ClientMutateFormModal";
import {ClientFormItem} from "@client/forms/item/ClientFormItem";

export const ClientForms = ({
								formManager,
								locale
							}: {
	formManager: IFormManager<any, any>
	locale: string | null
}) => {
	const [page, setPage] = useState<number>(1)
	const [posts, setPosts] = useState<any[]>([])
	const [openMutatePostModal, setOpenMutatePostModal] = useState<boolean>(false)
	const [targetForm, setTargetForm] = useState<any | null>(null)
	const [targetUpdateForm, setTargetUpdateForm] = useState<any | null>(null)
	
	const {
		onRequest,
		isLoading
	} = useRequest()
	
	const {
		totalPage,
		paginationData
	} = usePaginationCustom({
		page,
		data: posts,
		perPage: 20,
	})
	
	
	const {roles} = useClientAccessContext()
	
	const fetchPosts = useCallback(async () => {
		await onRequest(async () => {
			const res = await formManager.provider.getForms({
				locale,
				token: AuthClientHelper.getAccessToken()
			})
			setPosts(res || [])
		})
	}, [formManager, locale])
	
	
	const onDeleteForm: OnDeleteForm = useCallback(async (form) => {
		await onRequest(async () => {
			await formManager.provider.deleteForm({
				form,
				locale,
				token: AuthClientHelper.getAccessToken()
			})
			await fetchPosts()
		})
	}, [formManager, locale])
	
	const onSaveForm: OnSaveForm = useCallback(async (updateForm) => {
		await onRequest(async () => {
			await formManager.provider.updateForm({
				locale,
				token: AuthClientHelper.getAccessToken(),
				updateForm,
				form: targetForm,
			})
			
			onCloseMutatePostModal()
			await fetchPosts()
		})
	}, [targetForm, formManager, locale])
	
	const onEditForm: OnEditForm = useCallback(async (form) => {
		await onRequest(async () => {
			const updateForm = await formManager.provider.getUpdateFormFromForm({
				form,
				locale,
				token: AuthClientHelper.getAccessToken()
			})
			setTargetUpdateForm(updateForm)
			setTargetForm(form)
			setOpenMutatePostModal(true)
		})
	}, [formManager, locale])
	
	const onCloseMutatePostModal = useCallback(() => {
		setOpenMutatePostModal(false)
		setTargetForm(null)
		setTargetUpdateForm(null)
	}, [])
	
	const cardPreviewFields = useMemo(() => {
		return formManager.getCardPreviewFields()
	}, [formManager])
	
	const guards: {
		read: boolean
		update: boolean
		delete: boolean
	} = useMemo(() => {
		const globalRoles = formManager.getGlobalActionRoles()
		const rolesByTypes = formManager.getActionsRolesByTypes()
		return {
			read: ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.read,
				userRoles: roles,
			}),
			update: ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.update,
				userRoles: roles,
			}),
			delete: ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.delete,
				userRoles: roles,
			}),
		}
	}, [formManager, roles])
	
	useEffect(() => {
		fetchPosts()
	}, [locale])
	
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
			<ClientMutateFormModal
				initial={targetUpdateForm}
				onSaveForm={onSaveForm}
				formManager={formManager}
				onCloseModal={onCloseMutatePostModal}
				openModal={openMutatePostModal}
			/>
			<Grid
				container
				spacing={2}
			>
				{paginationData.map((form, index) => {
					return (
						<Grid
							size={{
								xs: 12,
								lg: 6,
							}}
							key={index}
						>
							<ClientFormItem
								form={form}
								onDeleteForm={onDeleteForm}
								onEditForm={onEditForm}
								cardPreviewFields={cardPreviewFields}
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

