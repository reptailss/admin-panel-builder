import React from 'react';
import {TreeItem} from '@mui/x-tree-view';

import {TreeClientMediaFolder} from "@client/mediaLibrary/containers/folders/types";
import {useRootMediaLibraryContext} from "@client/mediaLibrary/context/hooks";
import sx from './sx'
import Typography from '@mui/material/Typography';

export const ClientMediaLibraryTreeFoldersItem = ({folder}: {
	folder: TreeClientMediaFolder
}) => {
	
	const {folderId, setFolderId} = useRootMediaLibraryContext()
	
	const {
		name,
		id,
		childs
	} = folder;
	
	const list = childs && childs.length >= 1 && childs.map((item) => {
		return (
			<ClientMediaLibraryTreeFoldersItem
				folder={item}
				key={item.id}
			/>
		)
	})
	
	
	return (
		<TreeItem
			sx={sx.root}
			className={folderId === id ? 'active' : ''}
			key={id}
			itemId={id.toString()}
			label={<Typography
				onClick={(event) => {
					event.preventDefault()
					event.stopPropagation()
					setFolderId(id.toString())
				}}
				component={'span'}
				variant={'body1'}
				sx={sx.label}
				className={folderId === id ? 'active' : ''}
			>
				{name}
			</Typography>}
		>
			{list}
		</TreeItem>
	);
};
