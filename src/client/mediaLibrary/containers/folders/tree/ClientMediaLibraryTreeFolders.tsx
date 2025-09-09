import React, {useMemo} from 'react';
import {SimpleTreeView} from "@mui/x-tree-view"
import {CLIENT_MEDIA_HOME_FOLDER} from "@client/mediaLibrary/constants/rootFolder";
import sx from './sx'
import Box from '@mui/material/Box';
import {TreeClientMediaFolder} from "@client/mediaLibrary/containers/folders/types";
import {
	ClientMediaLibraryTreeFoldersItem
} from "@client/mediaLibrary/containers/folders/tree/Item/ClientMediaLibraryTreeFoldersItem";
import {useDataMediaLibraryContext} from "@client/mediaLibrary/context/hooks";

export const ClientMediaLibraryTreeFolders = () => {
	
	const {treeFolders} = useDataMediaLibraryContext()
	
	const homeFolder: TreeClientMediaFolder = useMemo(() => {
		return {
			...CLIENT_MEDIA_HOME_FOLDER,
			childs: treeFolders,
		}
	}, [treeFolders])
	
	return (
		<Box
			sx={sx.root}
		>
			<SimpleTreeView
				sx={sx.list}
				defaultExpandedItems={['0']}
			>
				<ClientMediaLibraryTreeFoldersItem
					folder={homeFolder}
				/>
			</SimpleTreeView>
		</Box>
	);
};
