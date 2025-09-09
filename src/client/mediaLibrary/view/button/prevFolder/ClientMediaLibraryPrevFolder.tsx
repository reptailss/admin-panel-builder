import React from 'react';
import {LeftArrowSvg} from "@client/images/LeftArrowSvg";
import {IconButton} from "@mui/material";
import {useDataMediaLibraryContext, useRootMediaLibraryContext} from "@client/mediaLibrary/context/hooks";


export const ClientMediaLibraryPrevFolder = () => {
	
	const {
		setFolderId,
		folderId,
		setForwardFolderId,
	} = useRootMediaLibraryContext()
	
	const {currentFolder} = useDataMediaLibraryContext()
	
	const handleClick = () => {
		setForwardFolderId(folderId)
		if (currentFolder) {
			setFolderId(currentFolder.parent_id.toString())
		}
	}
	return (
		<IconButton
			onClick={handleClick}
			title={'Назад'}
			disabled={!folderId}
		>
			<LeftArrowSvg/>
		</IconButton>
	);
};
