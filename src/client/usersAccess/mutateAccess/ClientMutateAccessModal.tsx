import React from 'react';
import {Modal} from "@client/ui/modal/Modal";
import {Paper} from "@mui/material";
import sx from "./sx";
import {ClientMutateAccess} from "@client/usersAccess/mutateAccess/ClientMutateAccess";
import {OnSaveAccess} from "@client/usersAccess/types/events";

export const ClientMutateAccessModal = ({
											initial,
											onCloseModal,
											allRoles,
											onSaveAccess,
											guards,
											openModal,
											onDeleteAccess,
										}: {
	initial?: string[] | null
	onSaveAccess: OnSaveAccess
	allRoles: Array<string | {
		value: string
		label: string
	}>
	guards: {
		save: boolean
		delete: boolean
	}
	onCloseModal: () => void
	openModal: boolean
	onDeleteAccess: () => void
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
				<ClientMutateAccess
					initial={initial}
					onSaveAccess={onSaveAccess}
					allRoles={allRoles}
					guards={guards}
					onDeleteAccess={onDeleteAccess}
				/>
			</Paper>
		</Modal>
	);
};

