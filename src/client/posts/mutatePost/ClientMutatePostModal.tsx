import React from 'react';
import {ClientMutatePost} from "@client/posts/mutatePost/ClientMutatePost";
import {OnSavePost} from "@client/posts/types/events";
import {IPostManager} from "@postManager/interfaces";
import {Modal} from "@client/ui/modal/Modal";
import {Paper} from "@mui/material";
import sx from "./sx";

export const ClientMutatePostModal = ({
										  initial,
										  onSavePost,
										  postManager,
										  onCloseModal,
										  openModal,
									  }: {
	initial?: any | null
	onSavePost: OnSavePost
	postManager: IPostManager<any, any>
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
				<ClientMutatePost
					onSavePost={onSavePost}
					initial={initial}
					postManager={postManager}
				/>
			</Paper>
		</Modal>
	);
};

