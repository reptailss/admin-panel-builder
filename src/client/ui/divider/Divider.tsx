import React, {ReactNode} from 'react'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import DividerLib from '@mui/material/Divider'

export const Divider = ({
						 label,
						 icon,
					 }: {
	label: string
	icon?: ReactNode
}) => {
	return (
		<DividerLib
			textAlign={'left'}
		>
			<Chip
				sx={{
					backgroundColor:'#2E3C43',
					color:'white'
				}}
				label={<Stack
					direction={'row'}
					alignItems={'center'}
					gap={1}
				>
					{label}
					{icon && icon}
				</Stack>}
			/>
		</DividerLib>
	)
}
