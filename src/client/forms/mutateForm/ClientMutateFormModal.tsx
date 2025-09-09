import React from 'react';
import {Modal} from "@client/ui/modal/Modal";
import {Paper} from "@mui/material";
import sx from "./sx";
import {OnSaveForm} from "@client/forms/types/events";
import {IFormManager} from "@formManager/interfaces";
import {ClientMutateForm} from "@client/forms/mutateForm/ClientMutateForm";

export const ClientMutateFormModal = ({
										  initial,
										  onSaveForm,
										  formManager,
										  onCloseModal,
										  openModal,
									  }: {
	initial?: any | null
	onSaveForm: OnSaveForm
	formManager: IFormManager<any, any>
	openModal: boolean
	onCloseModal: () => void
}) => {
	return (
		<Modal
			open={openModal}
			onClose={onCloseModal}
			sx={sx.modal}
		>
			<Paper
				elevation={4}
				sx={sx.paper}
			>
				<ClientMutateForm
					onSaveForm={onSaveForm}
					initial={initial}
					formManager={formManager}
				/>
			</Paper>
		</Modal>
	);
};

