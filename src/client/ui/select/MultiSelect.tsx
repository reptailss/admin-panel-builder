import React from 'react'
import {FormControl, InputLabel, MenuItem, Select as MuiSelect, SelectChangeEvent,} from '@mui/material'

export function MultiSelect({
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
	value: string[]
	onChange: (value: string[]) => void
	options: {
		value: string
		label: string
	}[]
	desktopWidth?: string
	mobileWidth?: string
	disabled?: boolean
	color?: string
}) {
	const handleChange = (event: SelectChangeEvent<string[]>) => {
		const {
			target: { value },
		} = event
		onChange(typeof value === 'string' ? value.split(',') : value)
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
				multiple
				value={value}
				label={label}
				onChange={handleChange}
				disabled={disabled}
				size="small"
				renderValue={(selected) => selected.join(', ')}
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
