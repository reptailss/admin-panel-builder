import React, {useCallback, useState} from 'react';
import {OnSelectMediaLibraryFile} from "@client/mediaLibrary/types/events";
import {ClientMediaFile} from "@client/mediaLibrary/types";
import {Modal} from "@client/ui/modal/Modal";
import {IMediaValueProvider} from "@fields/interfaces/mediaValueProvider";
import Box from '@mui/material/Box';
import sx from './sx'
import {IconButton, InputAdornment} from "@mui/material";
import {MediaFileSvg} from "@client/images/MediaFileSvg";
import {Input} from "@client/ui/inputs/Input";
import {Icon} from "@iconify/react";
import {ClientMediaLibrary} from "@client/mediaLibrary/ClientMediaLibrary";

export const ClientMediaLibraryInputModal = ({
											initialValue,
											onChange,
											provider,
											label,
											icon,
											mediaType,
											globalRoles,
											rolesByTypes,
										}: {
	onChange: (value: string) => void
	initialValue: string | null
	provider: IMediaValueProvider
	label?: string
	icon?: string | null
	mediaType: 'image' | 'video' | null
	globalRoles: readonly string[]
	rolesByTypes: {
		createFolder?: readonly string[]
		updateFolder?: readonly string[]
		deleteFolder?: readonly string[]
		createFile?: readonly string[]
		deleteFile?: readonly string[]
	}
}) => {
	
	const [targetSelectedFile, setTargetSelectedFile] = useState<string | null>(initialValue || '');
	const [openModal, setOpenModal] = React.useState(false)
	
	const handleSelectFile: OnSelectMediaLibraryFile = useCallback((
		filePath: string,
		clientMediaFile: ClientMediaFile
	) => {
		setTargetSelectedFile(filePath);
		onChange(filePath)
		setOpenModal(false)
	}, [])
	
	
	const onClose = useCallback(() => {
		setOpenModal(false)
	}, [])
	return (
		<>
			<Input
				value={targetSelectedFile}
				onChange={e => {
					onChange(e.target.value)
					setTargetSelectedFile(e.target.value);
				}}
				size={'small'}
				label={label}
				
				slotProps={{
					input: {
						startAdornment: icon ? (
							<InputAdornment position="start">
								<Icon
									icon={icon}
									style={{
										fontSize: '28px'
									}}
								/>
							</InputAdornment>
						) : undefined,
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									title={'Обрати медіа файл'}
									size={'small'}
									onClick={() => {
										setOpenModal(true)
									}}
								>
									<MediaFileSvg/>
								</IconButton>
							</InputAdornment>
						),
					},
				}}
			/>
			
			{openModal && <Modal
                open={openModal}
                sx={sx.modalInner}
                onClose={onClose}
            >
                <Box
                    sx={sx.modal}
                >
                    <ClientMediaLibrary
                        initialSelectedFile={targetSelectedFile}
                        onSelectFile={handleSelectFile}
                        provider={provider}
                        mediaType={mediaType}
                        globalRoles={globalRoles}
                        rolesByTypes={rolesByTypes}
                    />
                </Box>
            </Modal>}
		
		</>
	);
};

