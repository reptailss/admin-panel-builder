import React, {ReactElement, ReactNode, RefObject, useImperativeHandle} from 'react';
import {IconButton, Popover as PopoverLib} from "@mui/material";
import {CloseIconSvg} from "@client/icons/CloseIconSvg";
import {PopoverViewFeatures} from "@client/ui/popover/types";

export const Popover = ({
							children,
							button,
							onClose,
							onOpen,
							featuresRef
						}: {
	children: ReactNode
	onClose?: () => void
	onOpen?: () => void
	button: ReactElement
	featuresRef?: RefObject<PopoverViewFeatures>
}) => {
	
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
	
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		onOpen && onOpen()
		setAnchorEl(event.currentTarget);
	}
	
	const handleClose = () => {
		setAnchorEl(null)
		onClose && onClose()
	}
	
	useImperativeHandle(featuresRef, () => {
		return {
			closePopover: () => {
				setAnchorEl(null)
				onClose && onClose()
			}
		}
	}, [onClose])
	
	const open = Boolean(anchorEl);
	
	return (
		<>
			<span
				onClick={handleClick}
			>
				{button}
			</span>
			
			{open && <PopoverLib
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
            >
                <IconButton
                    sx={{
						position: 'absolute',
						right: '0',
						top: '0'
					}}
                    onClick={handleClose}
                >
                    <CloseIconSvg/>
                </IconButton>
				{children}
            </PopoverLib>}
		</>
	);
};

