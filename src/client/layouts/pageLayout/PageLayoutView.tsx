import React, {ReactNode} from 'react'
import sx from './sx'
import {Box} from '@mui/material'

export const PageLayoutView = ({
								   children,
							   }: {
	children: ReactNode
}) => {
	return (
		<Box
			sx={sx.root}
		>
			{children}
		</Box>
	)
}
