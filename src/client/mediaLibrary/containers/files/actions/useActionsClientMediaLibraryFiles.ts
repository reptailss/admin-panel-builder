import {useCallback} from "react";
import {useDataMediaLibraryContext, useRootMediaLibraryContext} from "@client/mediaLibrary/context/hooks";
import {useRequest} from "@client/requests/hooks/useRequest";
import {AuthClientHelper} from "@client/auth/helper/AuthClientHelper";
import {ClientMediaFile} from "@client/mediaLibrary/types";

export function useActionsClientMediaLibraryFiles(onSuccess?: () => void): {
	deleteFile: (id: string | number) => Promise<void>
	createFile: (folder: {
		file: File
		name: string
		folder_id: number | string
	}) => Promise<void>
	isPending: boolean
	selectFile:(file:ClientMediaFile)=>void
} {
	const {provider,onSelectFile} = useRootMediaLibraryContext()
	const {refetchFiles,} = useDataMediaLibraryContext()
	const {onRequest, isLoading} = useRequest()
	
	const deleteFile = useCallback(async (id: string | number) => {
		await onRequest(async () => {
			await provider.deleteMediaFile({
				id,
				token: AuthClientHelper.getAccessToken(),
			})
			await refetchFiles()
		})
	}, [])
	
	const createFile = useCallback(async (file: {
		file: File
		name: string
		folder_id: number | string
	}) => {
		await onRequest(async () => {
			await provider.createMediaFile({
				file: file.file,
				name: file.name,
				folder_id: file.folder_id,
				token: AuthClientHelper.getAccessToken(),
			})
			await refetchFiles()
			onSuccess && onSuccess()
		})
	}, [])
	
	const selectFile = useCallback((file:ClientMediaFile)=>{
		onSelectFile(file.file,file)
	},[])
	
	return {
		deleteFile,
		createFile,
		selectFile,
		isPending: isLoading
	}
	
}