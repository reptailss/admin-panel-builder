import React, {useState} from 'react';
import {EditorState} from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {EditorControlled} from "@client/editor/EditorControlled";
import {useSetStateByInitialValue} from "@client/editor/hooks/useSetStateByInitialValue";
import {IMediaValueProvider} from "@fields/interfaces/mediaValueProvider";


export const Editor = ({
						   initial,
						   onChange,
						   mediaProvider,
						   mediaRolesByTypes,
						   mediaGlobalRoles,
					   }: {
	initial?: string
	onChange: (res: string) => void
	mediaProvider: IMediaValueProvider | null
	mediaGlobalRoles: readonly string[]
	mediaRolesByTypes: {
		createFolder?: readonly string[]
		updateFolder?: readonly string[]
		deleteFolder?: readonly string[]
		createFile?: readonly string[]
		deleteFile?: readonly string[]
	}
}) => {
	
	const [editorState, setEditorState] = useState<EditorState | null>(null)
	useSetStateByInitialValue({
		initial,
		setEditorState,
	})
	
	if (!editorState) {
		return null
	}
	
	return (
		<EditorControlled
			onChange={onChange}
			editorState={editorState}
			setEditorState={setEditorState}
			mediaProvider={mediaProvider}
			mediaRolesByTypes={mediaRolesByTypes}
			mediaGlobalRoles={mediaGlobalRoles}
		/>
	);
};
