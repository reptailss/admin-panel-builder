import React, {ReactNode} from 'react';
import {useClientAppContext} from "@client/app/context/useClientAppContext";
import {ClientAuthGuard} from "@client/auth/guard/ClientAuthGuard";
import {ClientAuth2FaGuard} from "@client/auth/guard/ClientAuth2FaGuard";
import {ClientAuthProviderMather} from "@client/auth/helper/ClientAuthProviderMather";


export const ClientAuth = ({
							   children
						   }: {
	children: ReactNode
}) => {
	
	const app = useClientAppContext()
	
	if (!app.authProvider) {
		return children
	}
	
	if (ClientAuthProviderMather.is2FaAuthProvider(app.authProvider)) {
		return (
			<ClientAuth2FaGuard>
				{children}
			</ClientAuth2FaGuard>
		)
	}
	
	
	return (
		<ClientAuthGuard>
			{children}
		</ClientAuthGuard>
	);
};

