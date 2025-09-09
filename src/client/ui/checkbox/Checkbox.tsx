import React from 'react'
import {Checkbox as CheckboxLib, FormControlLabel} from '@mui/material'


export const Checkbox = ({
						  value,
						  onChange,
						  label,
					  }: {
	label: string;
	value: boolean;
	onChange: (checked: boolean) => void
}) => {
	
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.checked)
	}
	
	return (
		<FormControlLabel
			control={
				<CheckboxLib
					checked={value}
					onChange={handleChange}
				/>
			}
			label={label}
		/>
	)
}
