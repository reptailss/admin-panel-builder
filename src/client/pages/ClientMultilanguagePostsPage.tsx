import React, {useMemo} from 'react';
import {PageLayoutView} from "@client/layouts/pageLayout/PageLayoutView";
import {useParams} from "react-router-dom";
import {useClientAppContext} from "@client/app/context/useClientAppContext";
import {PageInfo} from "@client/ui/pageInfo/PageInfo";
import {ClientMultilanguagePosts} from "@client/posts/ClientMultilanguagePosts";

export const ClientMultilanguagePostsPage = () => {
	
	const {
		postManagerName,
	} = useParams()
	
	const clientAppContext = useClientAppContext()
	
	const multilanguagePostManager = useMemo(() => {
		return clientAppContext.multilanguagePostManagers[postManagerName || '']
	}, [postManagerName])
	
	if (
		!postManagerName ||
		!multilanguagePostManager
	) {
		throw new Error("Not found postManagers manager");
	}
	
	return (
		<PageLayoutView>
			
			<PageInfo
				title={multilanguagePostManager.getName()}
				icon={multilanguagePostManager.getIcon() || multilanguagePostManager.baseField.getIcon()}
			/>
			
			<ClientMultilanguagePosts
				multilanguagePostManager={multilanguagePostManager}
				locale={clientAppContext.targetLocale}
			/>
		</PageLayoutView>
	);
};

