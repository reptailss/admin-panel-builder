import {IMediaValueProvider} from "@fields/interfaces/mediaValueProvider";
import {useCallback, useState} from "react";
import {ClientMediaFile} from "@client/mediaLibrary/types";
import {useRequest} from "@client/requests/hooks/useRequest";
import {AuthClientHelper} from "@client/auth/helper/AuthClientHelper";

export function useFetchClientMediaLibraryFiles(provider: IMediaValueProvider): {
	isLoading: boolean
	files: ClientMediaFile[]
	fetchFiles: () => Promise<void>
} {
	const {onRequest, isLoading} = useRequest()
	const [files, setFiles] = useState<ClientMediaFile[]>([])
	
	const fetchFiles = useCallback(async () => {
		const res = await onRequest(() => {
			return provider.getAllMediaFiles({
				token: AuthClientHelper.getAccessToken(),
			})
		})
		if (!res) {
			setFiles([])
			return
		}
		setFiles(res)
	}, [])
	
	return {
		isLoading,
		files,
		fetchFiles
	}
}