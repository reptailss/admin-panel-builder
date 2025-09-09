import React from 'react'
import {InputAdornment, TextField, TextFieldProps} from '@mui/material'
import {Icon} from "@iconify/react";

export const InputWithIcon = (props: TextFieldProps & {
	startIcon?:string | null
}) => {
	return (
		<TextField
			variant="outlined"
			fullWidth
			sx={{
				'& .MuiOutlinedInput-root': {
					backgroundColor: '#F9FAFB',
					borderRadius: '10px',
					color: '#111827',
					'& fieldset': {
						borderColor: '#D1D5DB',
					},
					'&:hover fieldset': {
						borderColor: '#A1A1AA',
					},
					'&.Mui-focused fieldset': {
						borderColor: '#38bdf8',
					},
				},
			}}
			slotProps={{
				input: {
					style: {
						color: '#111827',
					},
					startAdornment:props?.startIcon ?  (
						<InputAdornment position="start">
							<Icon
								icon={props.startIcon}
								style={{
									fontSize: '28px'
								}}
							/>
						</InputAdornment>
					) : undefined,
				},
				inputLabel: {
					sx: {
						color: '#6B7280',
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
