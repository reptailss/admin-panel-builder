import React, {useMemo} from 'react';
import {Route, Routes} from "react-router-dom";
import {PathsHelper} from "@client/paths/PathsHelper";
import {ClientContentPage} from "@client/pages/ClientContentPage";
import {ClientPostsPage} from "@client/pages/ClientPostsPage";
import {ClientHomePage} from "@client/pages/ClientHomePage";
import {ClientAccessPage} from "@client/pages/ClientAccessPage";
import {ClientMultilanguagePostsPage} from "@client/pages/ClientMultilanguagePostsPage";
import {ClientFormsPage} from "@client/pages/ClientFormsPage";

export const ClientRoutes = () => {
	
	const paths = useMemo(() => {
		return {
			content: `${PathsHelper.getBasePath()}content/:contentManagerName/:page/:key`,
			posts: `${PathsHelper.getBasePath()}posts/:postManagerName`,
			multilanguagePosts: `${PathsHelper.getBasePath()}multilanguage-posts/:postManagerName`,
			access: `${PathsHelper.getBasePath()}access/:accessManagerName`,
			forms: `${PathsHelper.getBasePath()}forms/:formManagerName`,
			home: PathsHelper.getBasePath()
		}
	}, [])
	return (
		<Routes>
			
			<Route
				path={paths.home}
				element={<ClientHomePage/>}
			/>
			
			<Route
				path={paths.content}
				element={<ClientContentPage/>}
			/>
			<Route
				path={paths.posts}
				element={<ClientPostsPage/>}
			/>
			
			<Route
				path={paths.multilanguagePosts}
				element={<ClientMultilanguagePostsPage/>}
			/>
			
			<Route
				path={paths.access}
				element={<ClientAccessPage/>}
			/>
			
			<Route
				path={paths.forms}
				element={<ClientFormsPage/>}
			/>
		</Routes>
	);
};

