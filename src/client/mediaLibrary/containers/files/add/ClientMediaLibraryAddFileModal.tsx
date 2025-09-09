import React, {useCallback, useState} from 'react';
import {Paper} from "@mui/material";
import {Modal} from "@client/ui/modal/Modal";
import ClientMediaLibraryAddFile from "@client/mediaLibrary/containers/files/add/ClientMediaLibraryAddFile";
import sx from "./sx";
import {AddBtn} from "@client/ui/buttons/AddBtn";
import {FileSvg} from "@client/images/FileSvg";


export const ClientMediaLibraryAddFileModal = ({
												   folderId,
											   }: {
	folderId: number | string
}) => {
	
	const [openModal, setOpenModal] = useState<boolean>(false)
	
	const closeModal = useCallback(() => {
		setOpenModal(false)
	}, [])
	
	return (
		<>
			<AddBtn
				onClick={() => {
					setOpenModal(true)
				}}
				endIcon={<FileSvg/>}
			>
				Додати файл
			</AddBtn>
			
			<Modal
				open={openModal}
				onClose={closeModal}
				sx={sx.modal}
			>
				<Paper
					elevation={4}
					sx={sx.paper}
				>
					<ClientMediaLibraryAddFile
						folderId={folderId}
						onSave={closeModal}
					/>
				</Paper>
			
			</Modal>
		</>
	);
};

