import React, {useCallback, useMemo} from 'react';
import {Editor, RawDraftContentState} from "react-draft-wysiwyg";
import {ContentState, EditorState, Modifier} from 'draft-js';
import {EditorImageToolbarPopover} from "@client/editor/toolbars/image/EditorImageToolbarPopover";
import './styles.css'
import {IMediaValueProvider} from "@fields/interfaces/mediaValueProvider";
import {editorStateToHtml} from "@client/editor/helpers/editorStateHtml";
import htmlToDraft from 'html-to-draftjs';
import Button from '@mui/material/Button';

const EMPTY_CALLBACK = () => null
const OPTIONS_INLINE = ['bold', 'italic', 'underline', 'strikethrough',]
const OPTIONS_LIST = ['unordered', 'ordered']

const TOOLBAR = {
	image: {component: EMPTY_CALLBACK},
	fontFamily: {component: EMPTY_CALLBACK},
	emoji: {component: EMPTY_CALLBACK},
	embedded: {component: EMPTY_CALLBACK},
	inline: {options: OPTIONS_INLINE,},
	list: {options: OPTIONS_LIST}
}


export const EditorControlled = ({
									 onChange,
									 editorState,
									 setEditorState,
									 mediaProvider,
								 }: {
	onChange: (res: string) => void
	editorState: EditorState
	setEditorState: (state: EditorState) => void,
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
	
	const handleChange = useCallback((res: RawDraftContentState) => {
		const html = editorStateToHtml(res);
		onChange(html)
	}, [onChange])
	
	const toolbarCustomButtons = useMemo(() => {
		if (!mediaProvider) {
			return []
		}
		const insertHtml = () => {
			const html = prompt('Вставте HTML:');
			if (!html) return;
			
			const contentBlock = htmlToDraft(html);
			if (!contentBlock) return;
			
			const {contentBlocks, entityMap} = contentBlock;
			const newContentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
			
			const selection = editorState.getSelection();
			const contentWithInsert = Modifier.replaceWithFragment(
				editorState.getCurrentContent(),
				selection,
				newContentState.getBlockMap()
			);
			
			const newEditorState = EditorState.push(editorState, contentWithInsert, 'insert-fragment');
			setEditorState(newEditorState);
		};
		return [
			<EditorImageToolbarPopover
				mediaProvider={mediaProvider}
				editorState={editorState}
				setEditorState={setEditorState}
			/>,
			<Button onClick={insertHtml}>
				Вставити HTML
			</Button>
		]
	}, [mediaProvider, editorState, setEditorState])
	return (
		<>
			
			<Editor
				toolbar={TOOLBAR}
				editorState={editorState}
				onEditorStateChange={setEditorState}
				onContentStateChange={handleChange}
				toolbarCustomButtons={toolbarCustomButtons}
			/>
		</>
	);
};
