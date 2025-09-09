import React from 'react'
import {Box, CircularProgress} from '@mui/material'
import sx from './sx'

export const Spinner = ({
							variant,
							showBg,
						}: {
	variant: 'default' | 'overlay'
	showBg?: boolean
}) => {
	
	if (variant === 'overlay') {
		return (
			<Box
				sx={sx.overlay}
			>
				{showBg && <Box sx={sx.bg}/>}
				<CircularProgress/>
			</Box>
		)
	}
	
	return <CircularProgress/>
}
