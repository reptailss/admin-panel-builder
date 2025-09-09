import React, {ReactNode, useState} from 'react';
import {ClientAccessContextValue} from "@client/access/context/index";

export const ClientAccessProvider = ({
										 children
									 }: {
	children: ReactNode
}) => {
	const [hasAccess, setHasAccess] = useState(false)
	const [roles, setRoles] = useState<string[]>([])
	return (
		<ClientAccessContextValue.Provider
			value={{
				hasAccess,
				setHasAccess,
				roles,
				setRoles,
			}}
		>
			{children}
		</ClientAccessContextValue.Provider>
	);
};

