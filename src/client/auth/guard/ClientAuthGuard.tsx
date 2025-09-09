import React, {ReactNode} from 'react'
import {useClientAppContext} from "@client/app/context/useClientAppContext";
import {Spinner} from "@client/ui/spinner/Spinner";
import {useClientAuthContext} from "@client/auth/context/useClientAuthContext";
import {useClientAuthInit} from "@client/auth/hooks/useClientAuthInit";
import {useClientLogin} from "@client/auth/hooks/useClientLogin";
import {Login} from "@client/auth/login/Login";

export const ClientAuthGuard = ({children}: {
	children: ReactNode
}) => {
	
	const appViewContext = useClientAppContext()
	
	if (!appViewContext.authProvider) {
		return children
	}
	
	const {isAuth} = useClientAuthContext()
	
	const {isLoading} = useClientAuthInit()
	
	const {login, isPending} = useClientLogin()
	
	if (isLoading) {
		return (
			<Spinner
				variant={'overlay'}
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
