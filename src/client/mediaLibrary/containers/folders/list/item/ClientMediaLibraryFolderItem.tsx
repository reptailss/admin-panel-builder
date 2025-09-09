import React from 'react';

import {Stack, Typography} from '@mui/material';
import sx from './sx'
import {ClientMediaFolder} from "@client/mediaLibrary/types";
import {useRootMediaLibraryContext} from "@client/mediaLibrary/context/hooks";
import {ClientStringHelper} from "@client/helpers/ClientStringHelper";
import {
	ClientMediaLibraryFolderSideBar
} from "@client/mediaLibrary/containers/folders/sideBar/ClientMediaLibraryFolderSideBar";
import {FolderSvg} from "@client/images/FolderSvg";


export const ClientMediaLibraryFolderItem = ({folder}: {
	folder: ClientMediaFolder
}) => {
	
	const {setFolderId} = useRootMediaLibraryContext()
	
	const {name, id, parent_id} = folder;
	
	const handleClick = () => {
		setFolderId(id.toString())
	}
	
	return (
		<Stack
			gap={'5px'}
			alignItems={'flex-start'}
			justifyContent={'flex-start'}
			
			sx={sx.root}
		>
			<Stack
				sx={sx.folder}
				alignItems={'center'}
				justifyContent={'center'}
				direction={'row'}
				gap={'3px'}
			>
				<FolderSvg
					onClick={handleClick}
				/>
				
				<ClientMediaLibraryFolderSideBar
					id={id}
					parentId={parent_id}
					initial={folder}
				/>
			
			</Stack>
			
			<Typography
				sx={sx.name}
				variant={'body2'}
				onClick={handleClick}
			>
				{ClientStringHelper.sliceString(name, 16)}
			</Typography>
		</Stack>
	);
};
