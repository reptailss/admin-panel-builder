import sx from './sx'
import React, {ReactNode} from 'react'
import {Box, Drawer as DrawerLib, IconButton} from '@mui/material'

import Stack from '@mui/material/Stack'
import {CloseIconSvg} from "@client/icons/CloseIconSvg";

export const Drawer = ({
							   open,
							   onClose,
							   children,
						   }: {
	open: boolean
	onClose: () => void
	children: ReactNode
}) => {
	return (
		<DrawerLib
			anchor="left"
			open={open}
			onClose={onClose}
			sx={sx.root}
		>
			<Box
				sx={sx.drawerContainer}
			>
				<Stack
					direction={'row'}
					alignItems={'center'}
					justifyContent={'flex-end'}
				>
					<IconButton
						onClick={onClose}
						sx={sx.closeButton}
					>
						<CloseIconSvg color="black"/>
					</IconButton>
				</Stack>
				
				{children}
			</Box>
		</DrawerLib>
	)
}
