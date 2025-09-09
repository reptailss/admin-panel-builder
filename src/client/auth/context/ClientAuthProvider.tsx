import React, {ReactNode, useState} from 'react';
import {ClientAuthContextValue} from "@client/auth/context/index";
import {AuthClientUserInfo} from "@client/auth/context/types";

export const ClientAuthProvider = ({
									   children
								   }: {
	children: ReactNode
}) => {
	const [isAuth, setIsAuth] = useState(false)
	const [userInfo, setUserInfo] = useState<AuthClientUserInfo | null>(null)
	return (
		<ClientAuthContextValue.Provider
			value={{
				isAuth,
				setIsAuth,
				setUserInfo,
				userInfo,
			}}
		>
			{children}
		</ClientAuthContextValue.Provider>
	);
};

