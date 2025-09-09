import React, {ReactNode} from 'react'
import {Button} from '@mui/material'
import {SxStyle} from '@sx'

export const PrimaryBtn = ({
							   children,
							   type,
							   onClick,
							   sx = {},
							   disabled,
							   startIcon,
						   }: {
	children: ReactNode
	type?: 'submit' | 'button'
	sx?: SxStyle
	onClick?: () => void
	disabled?:boolean
	startIcon?:ReactNode
}) => {
	return (
		<Button
			sx={{
				backgroundColor: '#1C252E', // темний фон
				color: '#ffffff',
				fontWeight: 600,
				fontSize: '15px',
				borderRadius: '10px',
				padding: '10px 24px',
				textTransform: 'none',
				boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
				transition: 'background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease',
				'&:hover': {
					backgroundColor: '#2B3440',
					boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
					transform: 'translateY(-1px)',
				},
				'&:active': {
					transform: 'scale(0.98)',
					boxShadow: '0 3px 8px rgba(0,0,0,0.25)',
				},
				'&:disabled': {
					backgroundColor: '#3a3a3a',
					color: '#999',
					boxShadow: 'none',
				},
				...sx,
			}}
			startIcon={startIcon}
			variant="contained"
			type={type}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</Button>
	)
}
