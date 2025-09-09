import {useCallback, useState} from "react";
import {useShowErrors} from "@client/errors/useShowErrors";
import {useClientAppContext} from "@client/app/context/useClientAppContext";
import {AuthClientHelper} from "@client/auth/helper/AuthClientHelper";
import {useClientLogOut} from "@client/auth/hooks/useClientLogOut";

export function useRequest(initialLoading?: boolean): {
	onRequest<T>(cb: () => Promise<T>): Promise<T | null>
	isLoading: boolean
} {
	const [isLoading, setIsLoading] = useState<boolean>(typeof initialLoading !== "undefined" ? initialLoading : false);
	const showErrors = useShowErrors()
	const clientAppContext = useClientAppContext()
	const {logOut} = useClientLogOut()
	
	const onRequest = useCallback(
		async <T>(cb: () => Promise<T>): Promise<T | null> => {
			try {
				setIsLoading(true);
				const res = await cb()
				setIsLoading(false);
				return res;
			} catch (error) {
				console.log(error)
				if (clientAppContext.authProvider) {
					const isInvalidToken = clientAppContext.authProvider.isInvalidTokenErrorInResponse(error)
					if (!isInvalidToken) {
						showErrors(error);
						setIsLoading(false);
						return null
					}
					
					const refreshToken = AuthClientHelper.getRefreshToken()
					if (!refreshToken) {
						showErrors(error);
						setIsLoading(false);
						logOut()
						return null
					}
					try {
						const newTokens = await clientAppContext.authProvider.refreshToken(refreshToken)
						if (!newTokens) {
							showErrors(error);
							setIsLoading(false);
							logOut()
							return null
						}
						AuthClientHelper.saveTokens({
							accessToken: newTokens.access_token,
							refreshToken: newTokens.refresh_token,
							expiresIn: newTokens.expires_in
						})
						
						const res = await cb()
						setIsLoading(false);
						return res
					} catch (e) {
						console.log(e)
						showErrors([error, e]);
						setIsLoading(false);
						logOut()
						return null
					}
				}
				showErrors(error);
				setIsLoading(false);
				return null
			}
		}, [])
	
	return {
		isLoading,
		onRequest
	}
}