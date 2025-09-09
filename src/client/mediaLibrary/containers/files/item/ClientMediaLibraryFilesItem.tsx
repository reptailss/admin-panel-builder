import React from 'react';
import {Button, Stack} from "@mui/material";
import sx from "./sx";
import {ClientMediaFile} from "@client/mediaLibrary/types";
import {FileSvg} from "@client/images/FileSvg";
import {
	ClientMediaLibraryFileSideBar
} from "@client/mediaLibrary/containers/files/sideBar/ClientMediaLibraryFileSideBar";
import {
	useActionsClientMediaLibraryFiles
} from "@client/mediaLibrary/containers/files/actions/useActionsClientMediaLibraryFiles";
import {ClientStringHelper} from "@client/helpers/ClientStringHelper";
import {useCheckCanSelectedFile} from "@client/mediaLibrary/containers/files/checkSelectedFile/useCheckCanSelectedFile";

function parseFileDetails(fileName: string) {
	const match = fileName.match(/(.*)\.([^.]+)$/);
	if (!match || !match[2]) {
		return {
			fileFormat: '',
			fileNameWithoutFormat: ''
		}
	}
	return {
		fileFormat: match[2].toLowerCase(),
		fileNameWithoutFormat: match[1] || fileName
	}
}


function sliceFileName(fileName: string, length = 12): string {
	if (!fileName) {
		return ''
	}
	if (fileName.length < length) {
		return fileName
	}
	
	const {fileFormat, fileNameWithoutFormat} = parseFileDetails(fileName)
	
	
	const sliceFileName = ClientStringHelper.sliceString(
		fileNameWithoutFormat,
		length,
		false
	)
	return `${sliceFileName}.${fileFormat}`
	
}

export const ClientMediaLibraryFilesItem = ({
												file
											}: {
	file: ClientMediaFile,
}) => {
	
	const {
		selectFile,
	} = useActionsClientMediaLibraryFiles()
	
	
	const canSelectedFile = useCheckCanSelectedFile(file)
	
	const handleClick = () => {
		selectFile(file)
	}
	
	return (
		<Stack
			alignItems={'flex-start'}
			justifyContent={'flex-start'}
			sx={sx.root}
		>
			<Stack
				sx={sx.file}
				alignItems={'center'}
				justifyContent={'center'}
				direction={'row'}
				gap={'5px'}
				className={!canSelectedFile ? 'disableHover' : ''}
			>
				<FileSvg
					onClick={canSelectedFile ? handleClick : undefined}
				/>
				
				<ClientMediaLibraryFileSideBar
					file={file}
				/>
			
			</Stack>
			
			<Button
				sx={sx.name}
				onClick={canSelectedFile ? handleClick : undefined}
				title={file.name}
				size={'small'}
				className={!canSelectedFile ? 'disableHover' : ''}
			>
				{sliceFileName(file.name)}
			</Button>
		
		</Stack>
	);
};
