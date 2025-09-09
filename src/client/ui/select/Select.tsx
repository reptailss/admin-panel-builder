import React from 'react'
import {FormControl, InputLabel, MenuItem, Select as MuiSelect, SelectChangeEvent,} from '@mui/material'

export function Select<Value extends string>({
												 label,
												 options,
												 value,
												 onChange,
												 desktopWidth,
												 mobileWidth,
												 disabled,
												 color = '#111827',
											 }: {
	label?: string
	value: Value
	onChange: (value: Value) => void
	options: {
		value: Value
		label: string
	}[]
	desktopWidth?: string
	mobileWidth?: string
	disabled?: boolean
	color?: string
}) {
	const handleChange = (event: SelectChangeEvent<string>) => {
		onChange(event.target.value as Value)
	}
	
	return (
		<FormControl
			fullWidth
			size="small"
			sx={{
				width: {
					xs: mobileWidth,
					lg: desktopWidth,
				},
			}}
		>
			{label && (
				<InputLabel
					sx={{
						color: '#6B7280',
						'&.Mui-focused': {
							color: '#38bdf8',
						},
					}}
				>
					{label}
				</InputLabel>
			)}
			<MuiSelect
				value={value}
				label={label}
				onChange={handleChange}
				disabled={disabled}
				size="small"
				sx={{
					backgroundColor: '#F9FAFB',
					borderRadius: '10px',
					color: color,
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: '#D1D5DB',
					},
					'&:hover .MuiOutlinedInput-notchedOutline': {
						borderColor: '#A1A1AA',
					},
					'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
						borderColor: '#38bdf8',
					},
				}}
				MenuProps={{
					PaperProps: {
						sx: {
							bgcolor: '#fff',
							color: '#111827',
							borderRadius: '8px',
							boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
						},
					},
				}}
			>
				{options?.map((item) => (
					<MenuItem key={item.value} value={item.value}>
						{item.label}
					</MenuItem>
				))}
			</MuiSelect>
		</FormControl>
	)
}
