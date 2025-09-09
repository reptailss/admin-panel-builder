import {useEffect, useState} from 'react'

import {useClientAppContext} from "@client/app/context/useClientAppContext";
import {useClientAuthContext} from "@client/auth/context/useClientAuthContext";
import {AuthClientHelper} from "@client/auth/helper/AuthClientHelper";
import {useRequest} from "@client/requests/hooks/useRequest";


export function useClientAuthInit(): {
	isLoading: boolean
} {
	
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const {onRequest, isLoading: isLoadingRequest} = useRequest()
	const clientAppContext = useClientAppContext()
	const authViewContext = useClientAuthContext()
	
	useEffect(() => {
		const init = async () => {
			if (!clientAppContext.authProvider) {
				throw new Error("No auth provider provided")
			}
			const authProvider = clientAppContext.authProvider
			const token = AuthClientHelper.getAccessToken()
			
			if (!token) {
				const refreshToken = AuthClientHelper.getRefreshToken()
				if (!refreshToken) {
					setIsLoading(false)
					return
				}
				try {
					const tokens = await authProvider.refreshToken(refreshToken)
					if (!tokens?.access_token) {
						setIsLoading(false)
						return
					}
					AuthClientHelper.saveTokens({
						expiresIn: tokens.expires_in,
						refreshToken: tokens.refresh_token,
						accessToken: tokens.access_token
					})
				} catch (error) {
					setIsLoading(false)
					return
				}
				
			}
			
			await onRequest(async () => {
				return await authProvider.onInitAuth(AuthClientHelper.getAccessToken() || '')
			})
			
			const userInfo = await onRequest(async () => {
				return await authProvider.getUserInfoByToken(AuthClientHelper.getAccessToken() || '')
			})
			
			if (userInfo) {
				authViewContext.setUserInfo(userInfo)
			}
			authViewContext.setIsAuth(true)
			setIsLoading(false)
		}
		init()
	}, [])
	
	return {
		isLoading: isLoading || isLoadingRequest
	}
}