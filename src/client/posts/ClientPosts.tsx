import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Stack from "@mui/material/Stack";
import {useRequest} from "@client/requests/hooks/useRequest";
import {AuthClientHelper} from "@client/auth/helper/AuthClientHelper";
import {Spinner} from "@client/ui/spinner/Spinner";
import sx from './sx'
import {OnDeletePost, OnEditPost, OnSavePost} from "@client/posts/types/events";
import {ClientPostItem} from "@client/posts/item/ClientPostItem";
import {ClientMutatePostModal} from "@client/posts/mutatePost/ClientMutatePostModal";
import {IPostManager} from "@postManager/interfaces";
import {AddBtn} from "@client/ui/buttons/AddBtn";
import {Grid, Pagination} from "@mui/material";
import {usePaginationCustom} from "@client/pagination/usePaginationCustom";
import {useClientAccessContext} from "@client/access/context/useClientAccessContext";
import {NotAccessSimple} from "@client/access/notAccess/NotAccessSimple";
import {ClientGuardActions} from "@client/helpers/ClientGuardActionsHelper";

export const ClientPosts = ({
								postManager,
								locale
							}: {
	postManager: IPostManager<any, any>
	locale: string | null
}) => {
	const [page, setPage] = useState<number>(1)
	const [posts, setPosts] = useState<any[]>([])
	const [openMutatePostModal, setOpenMutatePostModal] = useState<boolean>(false)
	const [targetPost, setTargetPost] = useState<any | null>(null)
	const [targetCreatePost, setTargetCreatePost] = useState<any | null>(null)
	
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
			const res = await postManager.provider.getPosts({
				locale,
				token: AuthClientHelper.getAccessToken()
			})
			setPosts(res || [])
		})
	}, [postManager, locale])
	
	
	const onDeletePost: OnDeletePost = useCallback(async (post) => {
		await onRequest(async () => {
			await postManager.provider.deletePost({
				post,
				locale,
				token: AuthClientHelper.getAccessToken()
			})
			await fetchPosts()
		})
	}, [postManager, locale])
	
	const onSavePost: OnSavePost = useCallback(async (newCreatePost) => {
		await onRequest(async () => {
			if (targetPost) {
				await postManager.provider.updatePost({
					locale,
					token: AuthClientHelper.getAccessToken(),
					createPost:newCreatePost,
					post: targetPost,
				})
			} else {
				await postManager.provider.createPost({
					locale,
					token: AuthClientHelper.getAccessToken(),
					createPost: newCreatePost,
				})
			}
			
			onCloseMutatePostModal()
			await fetchPosts()
		})
	}, [targetPost, postManager, locale])
	
	const onEditPost: OnEditPost = useCallback(async (post) => {
		await onRequest(async () => {
			const createPost = await postManager.provider.getCreatePostFromPost({
				post,
				locale,
				token: AuthClientHelper.getAccessToken()
			})
			setTargetCreatePost(createPost)
			setTargetPost(post)
			setOpenMutatePostModal(true)
		})
	}, [postManager, locale])
	
	const onCloseMutatePostModal = useCallback(() => {
		setOpenMutatePostModal(false)
		setTargetPost(null)
		setTargetCreatePost(null)
	}, [])
	
	const cardPreviewFields = useMemo(() => {
		return postManager.getCardPreviewFields()
	}, [postManager])
	
	const cardPreviewImage = useMemo(() => {
		return postManager.getCardPreviewImage()
	}, [postManager])
	
	const guards: {
		read: boolean
		create: boolean
		update: boolean
		delete: boolean
	} = useMemo(() => {
		const globalRoles = postManager.getGlobalActionRoles()
		const rolesByTypes = postManager.getActionsRolesByTypes()
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
	}, [postManager, roles])
	
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
						setTargetCreatePost(null)
					}}
                >
                    Додати пост
                </AddBtn>}
			</Stack>
			
			
			<ClientMutatePostModal
				initial={targetCreatePost}
				onSavePost={onSavePost}
				postManager={postManager}
				onCloseModal={onCloseMutatePostModal}
				openModal={openMutatePostModal}
			/>
			<Grid
				container
				spacing={2}
			>
				{paginationData.map((post,index) => {
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

