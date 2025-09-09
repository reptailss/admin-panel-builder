import React, {useMemo} from 'react';
import {PageLayoutView} from "@client/layouts/pageLayout/PageLayoutView";
import {useParams} from "react-router-dom";
import {useClientAppContext} from "@client/app/context/useClientAppContext";
import {PageInfo} from "@client/ui/pageInfo/PageInfo";
import {ClientUserAccess} from "@client/usersAccess/ClientUserAccess";

export const ClientAccessPage = () => {
	
	const {
		accessManagerName,
	} = useParams()
	
	const clientAppContext = useClientAppContext()
	
	const accessManager = useMemo(() => {
		return clientAppContext.accessManagers[accessManagerName || '']
	}, [accessManagerName])
	
	if (
		!accessManagerName ||
		!accessManagerName
	) {
		throw new Error("Not found accessManager manager");
	}
	
	return (
		<PageLayoutView>
			
			<PageInfo
				title={accessManager.getName()}
				icon={accessManager.getIcon()}
			/>
			
			<ClientUserAccess
				accessManager={accessManager}
			/>
		</PageLayoutView>
	);
};

