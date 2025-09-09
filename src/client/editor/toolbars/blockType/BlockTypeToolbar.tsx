import React from 'react';
import {Select} from "@client/ui/select/Select";


export const BLOCK_TYPE_DATA: {
	value: string
	label: string
}[] = [
	{value: 'Normal', label: 'Normal'},
	{value: 'H1', label: 'H1'},
	{value: 'H2', label: 'H2'},
	{value: 'H3', label: 'H3'},
	{value: 'H4', label: 'H4'},
	{value: 'H5', label: 'H5'},
	{value: 'H6', label: 'H6'},
]

export const EditorBlockTypeToolbar = ({onChange, currentState}: {
	config: {
		inDropdown: boolean,
		options: string[]
	},
	translations: {
		[key: string]: string
	},
	currentState: {
		blockType: "Normal"
	},
	expanded: boolean,
	onChange: (value: string) => void
}) => {
	
	
	return (
		<Select
			desktopWidth={'130px'}
			mobileWidth={'130px'}
			options={BLOCK_TYPE_DATA}
			onChange={onChange}
			value={currentState.blockType || ''}
			label={'Блок'}
		/>
	);
};
