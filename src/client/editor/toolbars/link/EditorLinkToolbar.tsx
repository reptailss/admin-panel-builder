import React, {useState} from 'react';


import sx from './sx'
import Stack from "@mui/material/Stack";
import {PrimaryBtn} from "@client/ui/buttons/PrimaryBtn";
import {Input} from "@client/ui/inputs/Input";
import {FormControlLabel, Switch} from "@mui/material";

export const EditorLinkToolbar = ({
									  currentState,
									  onChange,
									  onSave,
								  }: {
	onChange: (type: 'link' | 'unlink', linkTitle?: string, linkTarget?: string, linkTargetOption?: '_blank' | '_self') => void,
	currentState: {
		link: {
			target: string
			targetOption: '_blank' | '_self'
			title: string
		},
		selectionText: string
	}
	onSave?: () => void
}) => {
	const [openInNewWindow, setOpenInNewWindow] = useState<boolean>(currentState?.link?.targetOption === '_blank' || false)
	const [title, setTitle] = useState<string>(currentState?.link?.title ?? currentState?.selectionText ?? '')
	const [path, setPath] = useState<string>(currentState?.link?.target ?? '')
	
	const handleSave = () => {
		onChange(
			'link',
			title, path,
			openInNewWindow ? '_blank' : '_self'
		)
		onSave && onSave()
	}
	
	return (
		<Stack
			sx={sx.root}
			gap={1}
		>
			<Input
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				label={'Заголовок'}
				size={'small'}
			/>
			
			<Input
				value={path}
				onChange={(e) => setPath(e.target.value)}
				label={'Url'}
				size={'small'}
			/>
			
			<FormControlLabel
				control={<Switch
					checked={openInNewWindow}
					onChange={(e) => setOpenInNewWindow(e.target.checked)}
				/>}
				label={'Відкривати в новому вікні'}
			/>
			
			<PrimaryBtn
				onClick={handleSave}
			>
				Зберегти
			</PrimaryBtn>
		</Stack>
	);
};
