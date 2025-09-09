import {useCallback, useMemo, useState} from 'react'
import {useClientAppContext} from "@client/app/context/useClientAppContext";
import {useClientAuthContext} from "@client/auth/context/useClientAuthContext";
import {AuthClientHelper} from "@client/auth/helper/AuthClientHelper";
import {useShowErrors} from "@client/errors/useShowErrors";
import {ClientAuthProviderMather} from "@client/auth/helper/ClientAuthProviderMather";
import {IAuth2FaField} from "@auth/interfaces";
import {useRequest} from "@client/requests/hooks/useRequest";


export function useClientLogin2Fa(): {
	login: (props: {
		username: string,
		password: string,
	}) => Promise<void>
	isPending: boolean
	need2faAuth: boolean
	loginResponse: any
	onReset: () => void
	onToFa: (values: Record<string, string>) => Promise<void>
	fields: IAuth2FaField<any>[]
} {
	const [isPending, setIsPending] = useState<boolean>(false)
	const [need2faAuth, setNeed2faAuth] = useState<boolean>(false)
	const [loginResponse, setLoginResponse] = useState<any>(null)
	
	const appContext = useClientAppContext()
	const authViewContext = useClientAuthContext()
	const showError = useShowErrors()
	const {onRequest, isLoading: isLoadingRequest} = useRequest()
	
	const login = async ({
							 username,
							 password,
						 }: {
		username: string,
		password: string,
	}): Promise<void> => {
		if (!appContext.authProvider) {
			throw new Error("No auth provider provided")
		}
		if (!ClientAuthProviderMather.is2FaAuthProvider(appContext.authProvider)) {
			throw new Error("No auth 2fa provider provided")
		}
		setNeed2faAuth(false)
		setLoginResponse(null)
		
		
		try {
			setIsPending(true)
			const loginResponse = await appContext.authProvider.login({
				username,
				password,
			})
			
			const checkNeed2FaByLoginResponse = await appContext.authProvider.checkNeed2FaByLoginResponse(loginResponse)
			
			if (!checkNeed2FaByLoginResponse) {
				const tokens = await appContext.authProvider.getTokensFromLoginResponse(loginResponse)
				const userInfo = await appContext.authProvider.getUserInfoByToken(tokens.access_token)
				
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
				return
			}
			setLoginResponse(loginResponse)
			setNeed2faAuth(true)
			
		} catch (error) {
			showError(error)
		} finally {
			setIsPending(false)
		}
	}
	
	const onToFa = useCallback(async (codes: Record<string, string>) => {
		if (!appContext.authProvider) {
			throw new Error("No auth provider provided")
		}
		if (!ClientAuthProviderMather.is2FaAuthProvider(appContext.authProvider)) {
			throw new Error("No auth 2fa provider provided")
		}
		setIsPending(true)
		try {
			const tokens = await appContext.authProvider.on2Fa({
				loginResponse,
				codes,
			})
			const userInfo = await appContext.authProvider.getUserInfoByToken(tokens.access_token)
			
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
			setIsPending(false)
		} catch (error) {
			console.log(error)
			setIsPending(false)
			showError(error)
		}
	}, [loginResponse])
	
	
	const fields: IAuth2FaField<any>[] = useMemo(() => {
		if (!appContext.authProvider || !ClientAuthProviderMather.is2FaAuthProvider(appContext.authProvider)) {
			throw new Error("No auth 2fa provider provided")
		}
		return appContext.authProvider.get2FaFields().map((field) => {
			return {
				key: field.key,
				name: field.name,
				checkRequired: field.checkRequired,
				refresh: async (loginResponse: any) => {
					try {
						await field.refresh(loginResponse)
					} catch (error) {
						showError(error)
					}
				}
				
			}
		})
	}, [])
	
	
	const onReset = useCallback(() => {
		setNeed2faAuth(false)
		setLoginResponse(null)
	}, [])
	
	return {
		login,
		isPending: isPending || isLoadingRequest,
		need2faAuth,
		loginResponse,
		onReset,
		onToFa,
		fields,
	}
	
}