import React from 'react';
import {useRootMediaLibraryContext} from "@client/mediaLibrary/context/hooks";
import IconButton from '@mui/material/IconButton';
import {RightArrowSvg} from "@client/images/RightArrowSvg";

export const ClientMediaLibraryForwardFolder = () => {
	
	const {
		setFolderId,
		folderId,
		forwardFolderId
	} = useRootMediaLibraryContext()
	
	const handleClick = () => {
		setFolderId(forwardFolderId)
	}
	
	const disabled = !forwardFolderId || folderId === forwardFolderId
	
	return (
		<IconButton
			onClick={handleClick}
			title={!disabled ? 'Вперед' : undefined}
			disabled={disabled}
		>
			<RightArrowSvg/>
		</IconButton>
	);
};
