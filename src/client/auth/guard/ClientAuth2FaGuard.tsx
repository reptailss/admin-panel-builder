import React, {ReactNode} from 'react'
import {useClientAppContext} from "@client/app/context/useClientAppContext";
import {Spinner} from "@client/ui/spinner/Spinner";
import {useClientAuthContext} from "@client/auth/context/useClientAuthContext";
import {useClientAuthInit} from "@client/auth/hooks/useClientAuthInit";
import {Login} from "@client/auth/login/Login";
import {ClientAuthProviderMather} from "@client/auth/helper/ClientAuthProviderMather";
import {useClientLogin2Fa} from "@client/auth/hooks/useClientLogin2Fa";
import {ConfirmAuth2FaCode} from "@client/auth/confirm2FaCode/ConfirmAuth2FaCode";

export const ClientAuth2FaGuard = ({children}: {
	children: ReactNode
}) => {
	
	const appContext = useClientAppContext()
	
	if (!appContext.authProvider) {
		return children
	}
	
	if (!ClientAuthProviderMather.is2FaAuthProvider(appContext.authProvider)) {
		return null
	}
	
	const {isAuth} = useClientAuthContext()
	
	const {isLoading} = useClientAuthInit()
	
	const {
		login,
		isPending,
		loginResponse,
		need2faAuth,
		onReset,
		onToFa,
		fields,
	} = useClientLogin2Fa()
	
	if (isLoading) {
		return (
			<Spinner
				variant={'overlay'}
			/>
		)
	}
	
	if (!isAuth && need2faAuth) {
		return (
			<ConfirmAuth2FaCode
				loginResponse={loginResponse}
				onReset={onReset}
				onToFa={onToFa}
				fields={fields}
			/>
		)
	}
	
	if (!isAuth) {
		return (
			<>
				{isPending && <Spinner variant={'overlay'}/>}
				
				<Login onLogin={login}/>
			</>
		)
	}
	
	return children
}
