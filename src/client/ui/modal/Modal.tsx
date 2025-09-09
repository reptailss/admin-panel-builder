import React, {ReactElement} from 'react';
import {IconButton, Modal as ModalLib} from "@mui/material";
import {SxStyle} from "@sx";
import {CloseIconSvg} from "@client/icons/CloseIconSvg";
import sxStyles from './sx'

export const Modal = ({
						  open,
						  onClose,
						  children,
						  sx
					  }: {
	open: boolean
	onClose: () => void
	children: ReactElement
	sx?: SxStyle
}) => {
	return (
		<ModalLib
			open={open}
			onClose={onClose}
			sx={sx}
		>
			<>
				<IconButton
					onClick={onClose}
					sx={sxStyles.closeIcon}
				>
					<CloseIconSvg color="white"/>
				</IconButton>
				{children}
			</>
		</ModalLib>
	);
};

