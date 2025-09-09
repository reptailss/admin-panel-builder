import React from 'react'
import {TextField, TextFieldProps} from '@mui/material'

export const Input = (props: TextFieldProps) => {
	return (
		<TextField
			variant="outlined"
			fullWidth
			sx={{
				'& .MuiOutlinedInput-root': {
					backgroundColor: '#F9FAFB', // світлий фон
					borderRadius: '10px',
					color: '#111827', // темний текст
					'& fieldset': {
						borderColor: '#D1D5DB', // сірий бордер
					},
					'&:hover fieldset': {
						borderColor: '#A1A1AA', // темніший при наведенні
					},
					'&.Mui-focused fieldset': {
						borderColor: '#38bdf8', // акцентний (блакитний)
					},
				},
			}}
			slotProps={{
				input: {
					style: {
						color: '#111827', // темний текст
					},
				},
				inputLabel: {
					sx: {
						color: '#6B7280', // сіруватий лейбл
						'&.Mui-focused': {
							color: '#38bdf8',
						},
					},
				},
			}}
			{...props}
		/>
	)
}
