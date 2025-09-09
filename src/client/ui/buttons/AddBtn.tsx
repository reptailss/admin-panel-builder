import React, {ReactNode} from 'react'
import {Button} from '@mui/material'
import {SxStyle} from '@sx'

export const AddBtn = ({
						   children,
						   type,
						   onClick,
						   sx = {},
						   disabled,
						   endIcon,
					   }: {
	children?: ReactNode
	type?: 'submit' | 'button'
	sx?: SxStyle
	onClick?: () => void
	disabled?: boolean
	endIcon?:React.ReactNode
}) => {
	return (
		<Button
			endIcon={endIcon}
			variant="contained"
			disabled={disabled}
			type={type}
			onClick={onClick}
			sx={{
				backgroundColor: '#E0F2FE', // світлий фон (sky-100)
				color: '#0ea5e9', // блакитний текст
				fontWeight: 500,
				fontSize: '15px',
				borderRadius: '8px',
				textTransform: 'none',
				border: '1px solid #7dd3fc',
				transition: 'all 0.2s ease',
				boxShadow: 'none',
				'&:hover': {
					backgroundColor: '#bae6fd',
					borderColor: '#38bdf8',
					boxShadow: '0 0 0 2px rgba(56, 189, 248, 0.2)',
				},
				'&:active': {
					backgroundColor: '#a5d8fa',
					boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)',
				},
				'&:disabled': {
					backgroundColor: '#f0f9ff',
					color: '#9ca3af',
					borderColor: '#dbeafe',
				},
				...sx,
			}}
		>
			{children ?? 'Додати'}
		</Button>
	)
}
