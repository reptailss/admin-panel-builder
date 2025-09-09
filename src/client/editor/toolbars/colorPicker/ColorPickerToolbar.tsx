import React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {useDebounceCb} from "@client/hooks/debounce/useDebounceCb";

export const EditorColorPickerToolbar = ({
											 onChange,
											 currentState,
											 onExpandEvent,
											 
										 }: {
											 currentState: {
												 color: string,
												 bgColor: string,
											 },
											 onChange: (type: string, value: string) => void,
											 onExpandEvent: () => void,
										 }
) => {
	
	
	const handleChangeColor = useDebounceCb((e:{
		target:{
			value:string
		}
	})=>{
		onChange('color', e.target.value)
	},400)
	
	const handleChangeBg = useDebounceCb((e:{
		target:{
			value:string
		}
	})=>{
		onChange('bgcolor', e.target.value)
	},400)
	
	
	return (
		<Stack
			gap={'0.5rem'}
			direction={'row'}
		>
			<Stack
				gap={'5px'}
				alignItems={'center'}
				direction={'row'}
			>
				<Typography
					variant={'caption'}
				>
					Колір тексту
				</Typography>
				
				<input
					type="color"
					defaultValue={currentState.color || '#000000'}
					onChange={handleChangeColor}
					onBlur={onExpandEvent}
				/>
			</Stack>
			
			<Stack
				alignItems={'center'}
				gap={'5px'}
				direction={'row'}>
				<Typography
					variant={'caption'}
				>
					Колір заливки
				</Typography>
				
				<input
					type="color"
					defaultValue={currentState.bgColor || '#ffffff'}
					onChange={handleChangeBg}
					onBlur={onExpandEvent}
				/>
			</Stack>
		</Stack>
	);
};
