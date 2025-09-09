import {IMediaValueProvider} from "@fields/interfaces/mediaValueProvider";
import {useCallback, useState} from "react";
import {ClientMediaFolder} from "@client/mediaLibrary/types";
import {useRequest} from "@client/requests/hooks/useRequest";
import {AuthClientHelper} from "@client/auth/helper/AuthClientHelper";

export function useFetchClientMediaLibraryFolders(provider: IMediaValueProvider): {
	isLoading: boolean
	folders: ClientMediaFolder[]
	fetchFolders: () => Promise<void>
} {
	const {onRequest, isLoading} = useRequest()
	const [folders, setFolders] = useState<ClientMediaFolder[]>([])
	
	const fetchFolders = useCallback(async () => {
		const res = await onRequest(() => {
			return provider.getAllMediaFolders({
				token: AuthClientHelper.getAccessToken(),
			})
		})
		if (!res) {
			setFolders([])
			return
		}
		setFolders(res)
	}, [])
	
	return {
		isLoading,
		folders,
		fetchFolders
	}
}