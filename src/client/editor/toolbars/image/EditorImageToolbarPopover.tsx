import React, {useRef, useState} from 'react';
import {Popover} from "@client/ui/popover/Popover";
import {IconButton} from "@mui/material";
import {EditorImageToolbar} from "@client/editor/toolbars/image/EditorImageToolbar";
import {IMediaValueProvider} from "@fields/interfaces/mediaValueProvider";
import {Icon} from "@iconify/react";
import {PopoverViewFeatures} from "@client/ui/popover/types";
import {EditorState} from "draft-js";
import {SelectionState} from "react-draft-wysiwyg";


export const EditorImageToolbarPopover = ({
											  mediaProvider,
											  editorState,
											  setEditorState,
										  }: {
	mediaProvider: IMediaValueProvider
	editorState: EditorState
	setEditorState: (state: EditorState) => void,
	
}) => {
	const [focus, setFocus] = useState<SelectionState | null>(null)
	const featuresRef = useRef<PopoverViewFeatures>(null);
	
	const onOpen = () => {
		setFocus(editorState.getSelection())
	}
	return (
		<Popover
			featuresRef={featuresRef}
			button={<IconButton>
				<Icon icon={'lets-icons:img-box'}/>
			</IconButton>}
			onOpen={onOpen}
		>
			<EditorImageToolbar
				mediaProvider={mediaProvider}
				onSave={featuresRef.current?.closePopover}
				editorState={editorState}
				setEditorState={setEditorState}
				focus={focus}
			/>
		</Popover>
	)
	
};
