import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Stack from "@mui/material/Stack";
import {useRequest} from "@client/requests/hooks/useRequest";
import {AuthClientHelper} from "@client/auth/helper/AuthClientHelper";
import {Spinner} from "@client/ui/spinner/Spinner";
import sx from './sx'
import {OnDeletePost, OnEditPost, OnSaveMultilanguagePost} from "@client/posts/types/events";
import {ClientPostItem} from "@client/posts/item/ClientPostItem";
import {AddBtn} from "@client/ui/buttons/AddBtn";
import {Grid, Pagination} from "@mui/material";
import {usePaginationCustom} from "@client/pagination/usePaginationCustom";
import {useClientAccessContext} from "@client/access/context/useClientAccessContext";
import {NotAccessSimple} from "@client/access/notAccess/NotAccessSimple";
import {ClientGuardActions} from "@client/helpers/ClientGuardActionsHelper";
import {MultilanguagePostManager} from "@postManager/MultilanguagePostManager";
import {ClientMultilanguageMutatePostModal} from "@client/posts/mutatePost/ClientMultilanguageMutatePostModal";

export const ClientMultilanguagePosts = ({
											 multilanguagePostManager,
											 locale
										 }: {
	multilanguagePostManager: MultilanguagePostManager<any, any, any>
	locale: string | null
}) => {
	const [page, setPage] = useState<number>(1)
	const [posts, setPosts] = useState<any[]>([])
	const [openMutatePostModal, setOpenMutatePostModal] = useState<boolean>(false)
	const [targetPost, setTargetPost] = useState<any | null>(null)
	const [targetBaseFields, setTargetBaseFields] = useState<any | null>(null)
	const [targetMultilanguageField, setTargetMultilanguageField] = useState<any | null>(null)
	
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
			const res = await multilanguagePostManager.provider.getPosts({
				locale,
				token: AuthClientHelper.getAccessToken()
			})
			setPosts(res || [])
		})
	}, [multilanguagePostManager, locale])
	
	
	const onDeletePost: OnDeletePost = useCallback(async (post) => {
		await onRequest(async () => {
			await multilanguagePostManager.provider.deletePost({
				post,
				token: AuthClientHelper.getAccessToken()
			})
			await fetchPosts()
		})
	}, [multilanguagePostManager])
	
	const onSavePost: OnSaveMultilanguagePost = useCallback(async (baseField, multilanguageField) => {
		await onRequest(async () => {
			if (targetPost) {
				await multilanguagePostManager.provider.updatePost({
					token: AuthClientHelper.getAccessToken(),
					baseField,
					multilanguageField,
					post: targetPost,
				})
			} else {
				await multilanguagePostManager.provider.createPost({
					token: AuthClientHelper.getAccessToken(),
					baseField,
					multilanguageField
				})
			}
			
			onCloseMutatePostModal()
			await fetchPosts()
		})
	}, [targetPost, multilanguagePostManager])
	
	const onEditPost: OnEditPost = useCallback(async (post) => {
		await onRequest(async () => {
			const {
				multilanguageField,
				baseField
			} = await multilanguagePostManager.provider.getFieldsFromPost({
				post,
				token: AuthClientHelper.getAccessToken()
			})
			setTargetPost(post)
			setTargetBaseFields(baseField)
			setTargetMultilanguageField(multilanguageField)
			setOpenMutatePostModal(true)
		})
	}, [multilanguagePostManager, locale])
	
	const onCloseMutatePostModal = useCallback(() => {
		setOpenMutatePostModal(false)
		setTargetPost(null)
		setTargetBaseFields(null)
		setTargetMultilanguageField(null)
	}, [])
	
	const cardPreviewFields = useMemo(() => {
		return multilanguagePostManager.getCardPreviewFields()
	}, [multilanguagePostManager])
	
	const cardPreviewImage = useMemo(() => {
		return multilanguagePostManager.getCardPreviewImage()
	}, [multilanguagePostManager])
	
	const guards: {
		read: boolean
		create: boolean
		update: boolean
		delete: boolean
	} = useMemo(() => {
		const globalRoles = multilanguagePostManager.getGlobalActionRoles()
		const rolesByTypes = multilanguagePostManager.getActionsRolesByTypes()
		return {
			read: ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.read,
				userRoles: roles,
			}),
			create: ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.create,
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
	}, [multilanguagePostManager, roles])
	
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
			<Stack
				direction={'row'}
				justifyContent={'flex-end'}
			>
				{guards.create && <AddBtn
                    onClick={() => {
						setOpenMutatePostModal(true)
						setTargetPost(null)
					}}
                >
                    Додати пост
                </AddBtn>}
			</Stack>
			
			
			<ClientMultilanguageMutatePostModal
				initialBaseFields={targetBaseFields}
				initialMultilanguageField={targetMultilanguageField}
				onSavePost={onSavePost}
				multilanguagePostManager={multilanguagePostManager}
				onCloseModal={onCloseMutatePostModal}
				openModal={openMutatePostModal}
			/>
			<Grid
				container
				spacing={2}
			>
				{paginationData.map((post, index) => {
					return (
						<Grid
							size={{
								xs: 12,
								lg: 6,
							}}
							key={index}
						>
							<ClientPostItem
								post={post}
								onDeletePost={onDeletePost}
								onEditPost={onEditPost}
								cardPreviewFields={cardPreviewFields}
								cardPreviewImage={cardPreviewImage}
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

