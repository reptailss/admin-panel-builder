import {ReactNode} from 'react';
import {useClientAppContext} from "@client/app/context/useClientAppContext";
import {ClientAccessGuard} from "@client/access/guard/ClientAccessGuard";

export const ClientAccess = ({
								 children
							 }: {
	children: ReactNode
}) => {
	
	const app = useClientAppContext()
	
	if (!app.accessProvider) {
		return children
	}
	
	return (
		<ClientAccessGuard>
			{children}
		</ClientAccessGuard>
	)
};

