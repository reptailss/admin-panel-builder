import React, {useCallback, useState} from 'react';
import {Paper} from "@mui/material";
import {ClientMediaFolder} from "@client/mediaLibrary/types";
import {Modal} from "@client/ui/modal/Modal";
import {
	ClientMediaLibraryMutateFolder
} from "@client/mediaLibrary/containers/folders/mutateFolder/ClientMediaLibraryMutateFolder";
import sx from './sx'
import {AddBtn} from "@client/ui/buttons/AddBtn";
import {FolderSvg} from "@client/images/FolderSvg";

export const ClientMediaLibraryMutateFolderModal = ({
														parentId,
														initial,
													}: {
	parentId: number | string
	initial?: ClientMediaFolder
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
				endIcon={<FolderSvg/>}
			>
				{initial?.id ? 'Оновити папку' : 'Додати папку'}
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
					<ClientMediaLibraryMutateFolder
						parentId={parentId}
						onSave={closeModal}
						initial={initial}
					/>
				</Paper>
			</Modal>
		</>
	);
};

