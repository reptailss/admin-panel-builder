import React from 'react';
import {UserSidebarView} from "@client/user/userSidebar/UserSidebarView";
import {useClientAuthContext} from "@client/auth/context/useClientAuthContext";
import {useClientLogOut} from "@client/auth/hooks/useClientLogOut";

export const UserSidebar = () => {
	
	const clientAuthContext = useClientAuthContext()
	const {logOut} = useClientLogOut()
	
	if (!clientAuthContext.userInfo) {
		return null
	}
	return (
		<UserSidebarView
			userInfo={clientAuthContext.userInfo}
			onLogout={logOut}
		/>
	);
};

