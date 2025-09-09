import React from 'react';
import {NotAccessSimpleView} from "@client/access/view/NotAccessSimpleView";
import {useClientLogOut} from "@client/auth/hooks/useClientLogOut";

export const NotAccessSimple = () => {
	
	const {logOut} = useClientLogOut()
	
	return (
		<NotAccessSimpleView onLogout={logOut}/>
	);
};

