import React, {ReactNode} from 'react';
import {Stack} from '@mui/material';

import Paper from "@mui/material/Paper";
import {useDataMediaLibraryContext} from "@client/mediaLibrary/context/hooks";
import sx from './sx'
import {
	ClientMediaLibraryFolderItem
} from "@client/mediaLibrary/containers/folders/list/item/ClientMediaLibraryFolderItem";

export const ClientMediaLibraryFoldersList = ({
												  children
											  }: {
	children?: ReactNode
}) => {
	
	const {currentFolder} = useDataMediaLibraryContext()
	
	
	const list = currentFolder && currentFolder.childs && currentFolder?.childs.length >= 1 && currentFolder.childs.map((folder) => {
		return (
			<ClientMediaLibraryFolderItem
				key={folder.id}
				folder={folder}
			/>
		)
	})
	
	
	return (
		<Paper
			sx={sx.root}
		>
			<Stack
				gap={'1rem'}
				flexWrap={'wrap'}
				alignItems={'flex-start'}
				direction={'row'}
				sx={sx.list}
			>
				{list}
				
				{children && children}
			</Stack>
		</Paper>
	);
};
