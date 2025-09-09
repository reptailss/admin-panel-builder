import React, {ChangeEvent} from 'react';
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {EditorImageSizeType} from "@client/editor/toolbars/image/types";

const IMAGES_SIZE_TYPES: {
	value: EditorImageSizeType,
	label: string
}[] = [
	{value: 'full_width', label: '100%'},
	{value: 'auto_size', label: 'Авто'},
	{value: 'fixed_size', label: 'Фіксована'},
]

export const EditorImageSelectSizeType = ({value, onChange}: {
	value: EditorImageSizeType,
	onChange: (value: EditorImageSizeType) => void
}) => {
	
	const list = IMAGES_SIZE_TYPES.map(({
											label, value
										}) => {
		return (
			<FormControlLabel
				key={value} value={value}
				control={<Radio size={'small'}/>}
				label={label}
			/>
		)
	})
	
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value as EditorImageSizeType);
	};
	
	return (
		<FormControl>
			<FormLabel>Тип розміру</FormLabel>
			
			<RadioGroup
				value={value}
				onChange={handleChange}
			>
				{list}
			</RadioGroup>
		</FormControl>
	);
};
