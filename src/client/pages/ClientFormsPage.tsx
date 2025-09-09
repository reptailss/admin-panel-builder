import React, {useMemo} from 'react';
import {PageLayoutView} from "@client/layouts/pageLayout/PageLayoutView";
import {useParams} from "react-router-dom";
import {useClientAppContext} from "@client/app/context/useClientAppContext";
import {PageInfo} from "@client/ui/pageInfo/PageInfo";
import {ClientForms} from "@client/forms/ClientForms";

export const ClientFormsPage = () => {
	
	const {
		formManagerName,
	} = useParams()
	
	const clientAppContext = useClientAppContext()
	
	const formManager = useMemo(() => {
		return clientAppContext.formManagers[formManagerName || '']
	}, [formManagerName])
	
	if (
		!formManagerName ||
		!formManager
	) {
		throw new Error("Not found form manager");
	}
	
	return (
		<PageLayoutView>
			
			<PageInfo
				title={formManager.getName()}
				icon={formManager.getIcon() || formManager.updateField.getIcon()}
			/>
			
			<ClientForms
				formManager={formManager}
				locale={clientAppContext.targetLocale}
			/>
		</PageLayoutView>
	);
};

