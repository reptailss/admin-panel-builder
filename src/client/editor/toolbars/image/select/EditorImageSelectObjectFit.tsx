import React, {ChangeEvent} from 'react';
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {EditorImageSizeType} from "@client/editor/toolbars/image/types";

const IMAGES_SIZE_TYPES: {
	value: string,
	label: string
}[] = [
	{value: 'cover', label: 'cover'},
	{value: 'contain', label: 'contain'},
	{value: 'none', label: 'none'},
]

export const EditorImageSelectObjectFit = ({value, onChange}: {
	value: string,
	onChange: (value: string) => void
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
			<FormLabel>Object fit</FormLabel>
			
			<RadioGroup
				value={value}
				onChange={handleChange}
			>
				{list}
			</RadioGroup>
		</FormControl>
	);
};
