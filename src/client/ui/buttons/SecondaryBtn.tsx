import React, {ReactNode} from 'react'
import {Button} from '@mui/material'
import {SxStyle} from '@sx'

export const SecondaryBtn = ({
								 children,
								 type,
								 onClick,
								 sx = {},
								 disabled,
								 endIcon,
							 }: {
	children: ReactNode
	type?: 'submit'
	sx?: SxStyle
	onClick?: () => void
	disabled?: boolean
	endIcon?: ReactNode
}) => {
	return (
		<Button
			endIcon={endIcon}
			sx={{
				backgroundColor: '#38bdf8',
				color: '#ffffff',
				fontWeight: 600,
				fontSize: '15px',
				borderRadius: '10px',
				padding: '7px 24px',
				textTransform: 'none',
				boxShadow: '0 4px 12px rgba(56, 189, 248, 0.3)',
				transition: 'background-color 0.25s ease, transform 0.15s ease, box-shadow 0.2s ease',
				'&:hover': {
					backgroundColor: '#0ea5e9', // sky-500
					boxShadow: '0 6px 18px rgba(14, 165, 233, 0.4)',
					transform: 'translateY(-1px)',
				},
				'&:active': {
					transform: 'scale(0.98)',
					boxShadow: '0 2px 8px rgba(14, 165, 233, 0.3)',
				},
				'&:disabled': {
					backgroundColor: '#bae6fd', // sky-200
					color: '#6b7280', // gray-500
					boxShadow: 'none',
				},
				...sx,
			}}
			variant="contained"
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</Button>
	)
}
