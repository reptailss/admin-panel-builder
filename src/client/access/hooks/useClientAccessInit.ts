import {useEffect} from "react";
import {useRequest} from "@client/requests/hooks/useRequest";
import {useClientAccessContext} from "@client/access/context/useClientAccessContext";
import {useClientAppContext} from "@client/app/context/useClientAppContext";
import {AuthClientHelper} from "@client/auth/helper/AuthClientHelper";

export function useClientAccessInit() {
	const {onRequest, isLoading} = useRequest(true)
	const clientAccessContext = useClientAccessContext()
	const clientAppContext = useClientAppContext()
	useEffect(() => {
		const init = async () => {
			if (!clientAppContext.accessProvider) {
				throw new Error("No access provider provided")
			}
			
			const result = await onRequest(async () => {
				if (!clientAppContext.accessProvider) {
					throw new Error("No access provider provided")
				}
				return await clientAppContext.accessProvider.checkAccess(AuthClientHelper.getAccessToken() || '')
				
			})
			clientAccessContext.setHasAccess(result?.hasAccess || false)
			clientAccessContext.setRoles(result?.roles || [])
		}
		
		init()
	}, [])
	
	
	return {
		isLoading
	}
}