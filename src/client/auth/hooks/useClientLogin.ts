import {useState} from 'react'
import {useClientAppContext} from "@client/app/context/useClientAppContext";
import {useClientAuthContext} from "@client/auth/context/useClientAuthContext";
import {AuthClientHelper} from "@client/auth/helper/AuthClientHelper";
import {useShowErrors} from "@client/errors/useShowErrors";
import {useRequest} from "@client/requests/hooks/useRequest";


export function useClientLogin(): {
	login: (props: {
		username: string,
		password: string,
	}) => Promise<void>
	isPending: boolean
} {
	const [isPending, setIsPending] = useState<boolean>(false)
	const appViewContext = useClientAppContext()
	const authViewContext = useClientAuthContext()
	const showError = useShowErrors()
	const {onRequest, isLoading: isLoadingRequest} = useRequest()
	const appContext = useClientAppContext()
	
	const login = async ({
							 username,
							 password,
						 }: {
		username: string,
		password: string,
	}): Promise<void> => {
		if (!appViewContext.authProvider) {
			throw new Error("No auth provider provided")
		}
		try {
			setIsPending(true)
			const tokens = await appViewContext.authProvider.login({
				username,
				password,
			})
			
			const userInfo = await appViewContext.authProvider.getUserInfoByToken(tokens.access_token)
			
			AuthClientHelper.saveTokens({
				accessToken: tokens.access_token,
				refreshToken: tokens.refresh_token,
				expiresIn: tokens.expires_in,
			})
			const authProvider = appContext.authProvider
			if (authProvider) {
				await onRequest(async () => {
					return await authProvider.onInitAuth(AuthClientHelper.getAccessToken() || '')
				})
			}
			
			authViewContext.setIsAuth(true)
			authViewContext.setUserInfo(userInfo)
		} catch (error) {
			showError(error)
		} finally {
			setIsPending(false)
		}
	}
	
	return {
		login,
		isPending:isPending || isLoadingRequest,
	}
	
}