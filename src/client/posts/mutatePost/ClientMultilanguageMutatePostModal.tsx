import React from 'react';
import {OnSaveMultilanguagePost} from "@client/posts/types/events";
import {MultilanguagePostManager} from "@postManager/MultilanguagePostManager";
import sx from "@client/posts/mutatePost/sx";
import {Paper} from "@mui/material";
import {Modal} from "@client/ui/modal/Modal";
import {ClientMultilanguageMutatePost} from "@client/posts/mutatePost/ClientMultilanguageMutatePost";

export const ClientMultilanguageMutatePostModal = ({
													   initialBaseFields,
													   initialMultilanguageField,
													   onSavePost,
													   multilanguagePostManager,
													   openModal,
													   onCloseModal,
												   }: {
	initialBaseFields?: any | null
	initialMultilanguageField?: any | null
	onSavePost: OnSaveMultilanguagePost
	multilanguagePostManager: MultilanguagePostManager<any, any, any>
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
				<ClientMultilanguageMutatePost
					initialBaseFields={initialBaseFields}
					initialMultilanguageField={initialMultilanguageField}
					onSavePost={onSavePost}
					multilanguagePostManager={multilanguagePostManager}
				/>
			</Paper>
		</Modal>
	);
};

