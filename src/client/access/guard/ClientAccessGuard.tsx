import React, {ReactNode} from 'react';
import {useClientAccessContext} from "@client/access/context/useClientAccessContext";
import {NotAccessView} from "@client/access/view/NotAccessView";
import {useClientAccessInit} from "@client/access/hooks/useClientAccessInit";
import {Spinner} from "@client/ui/spinner/Spinner";
import {useClientLogOut} from "@client/auth/hooks/useClientLogOut";

export const ClientAccessGuard = ({
									  children
								  }: {
	children: ReactNode
}) => {
	
	const {hasAccess} = useClientAccessContext()
	const {isLoading} = useClientAccessInit()
	
	const {logOut} = useClientLogOut()
	
	if (isLoading) {
		return (
			<Spinner
				variant={'overlay'}
			/>
		)
	}
	if (!hasAccess) {
		return (
			<NotAccessView onLogout={logOut}/>
		)
	}
	return (
		children
	);
};

