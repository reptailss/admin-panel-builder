import React, {useMemo} from 'react';
import {ClientPosts} from "@client/posts/ClientPosts";
import {PageLayoutView} from "@client/layouts/pageLayout/PageLayoutView";
import {useParams} from "react-router-dom";
import {useClientAppContext} from "@client/app/context/useClientAppContext";
import {PageInfo} from "@client/ui/pageInfo/PageInfo";

export const ClientPostsPage = () => {
	
	const {
		postManagerName,
	} = useParams()
	
	const clientAppContext = useClientAppContext()
	
	const postManager = useMemo(() => {
		return clientAppContext.postManagers[postManagerName || '']
	}, [postManagerName])
	
	if (
		!postManagerName ||
		!postManager
	) {
		throw new Error("Not found postManagers manager");
	}
	
	return (
		<PageLayoutView>
			
			<PageInfo
				title={postManager.getName()}
				icon={postManager.getIcon() || postManager.createField.getIcon()}
			/>
			
			<ClientPosts
				postManager={postManager}
				locale={clientAppContext.targetLocale}
			/>
		</PageLayoutView>
	);
};

