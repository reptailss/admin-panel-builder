import {useCallback} from "react";
import {useDataMediaLibraryContext, useRootMediaLibraryContext} from "@client/mediaLibrary/context/hooks";
import {useRequest} from "@client/requests/hooks/useRequest";
import {AuthClientHelper} from "@client/auth/helper/AuthClientHelper";

export function useActionsClientMediaLibraryFolders(onSuccess?: () => void): {
	deleteFolder: (id: string | number) => Promise<void>
	createFolder: (folder: {
		name: string
		parent_id: string | number
	}) => Promise<void>
	updateFolder: (folder: {
		name: string
		parent_id: string | number
		id: string | number
	}) => Promise<void>
	isPending: boolean
} {
	const {provider} = useRootMediaLibraryContext()
	const {refetchFolders} = useDataMediaLibraryContext()
	const {onRequest, isLoading} = useRequest()
	
	const deleteFolder = useCallback(async (id: string | number) => {
		await onRequest(async () => {
			await provider.deleteMediaFolder({
				id,
				token: AuthClientHelper.getAccessToken(),
			})
			await refetchFolders()
			onSuccess && onSuccess()
		})
	}, [])
	
	const createFolder = useCallback(async (folder: {
		name: string
		parent_id: string | number
	}) => {
		await onRequest(async () => {
			await provider.createMediaFolder({
				name: folder.name,
				parent_id: folder.parent_id,
				token: AuthClientHelper.getAccessToken(),
			})
			await refetchFolders()
			onSuccess && onSuccess()
		})
	}, [])
	
	const updateFolder = useCallback(async (folder: {
		name: string
		parent_id: string | number
		id: string | number
	}) => {
		await onRequest(async () => {
			await provider.updateMediaFolder({
				name: folder.name,
				parent_id: folder.parent_id,
				id: folder.id,
				token: AuthClientHelper.getAccessToken(),
			})
			await refetchFolders()
			onSuccess && onSuccess()
		})
	}, [])
	
	return {
		deleteFolder,
		createFolder,
		updateFolder,
		isPending: isLoading
	}
	
}