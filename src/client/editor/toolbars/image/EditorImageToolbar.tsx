import React, {useState} from 'react';

import sx from './sx'
import Stack from "@mui/material/Stack";
import {EditorImageSizeType} from "@client/editor/toolbars/image/types";
import {Input} from "@client/ui/inputs/Input";
import {PrimaryBtn} from "@client/ui/buttons/PrimaryBtn";
import {EditorImageSelectSizeType} from "@client/editor/toolbars/image/select/EditorImageSelectSizeType";
import {ClientMediaLibraryInputModal} from "@client/mediaLibrary/ClientMediaLibraryInputModal";
import {IMediaValueProvider} from "@fields/interfaces/mediaValueProvider";
import {AtomicBlockUtils, EditorState,} from "draft-js";
import {SelectionState,} from "react-draft-wysiwyg";
import {EditorImageSelectObjectFit} from "@client/editor/toolbars/image/select/EditorImageSelectObjectFit";

const getEditorImageSize = (sizeType: EditorImageSizeType, height: string, width: string,) => {
	switch (sizeType) {
		case 'fixed_size':
			return {
				width: (width || 100) + 'px',
				height: (height || 100) + 'px',
			}
		case 'auto_size':
			return {
				width: 'auto',
				height: 'auto',
			}
		case 'full_width':
			return {
				width: '100%',
				height: 'auto',
			}
	}
}
const mediaGlobalRoles = []
const mediaRolesByTypes = {}
export const EditorImageToolbar = ({
									   
									   mediaProvider,
									   onSave,
									   editorState,
									   setEditorState,
									   focus,
								   }: {
	mediaProvider: IMediaValueProvider
	onSave?: () => void
	editorState: EditorState
	setEditorState: (state: EditorState) => void
	focus: SelectionState | null
}) => {
	
	
	const [sizeType, setSizeType] = useState<EditorImageSizeType>('auto_size')
	const [value, setValue] = useState<string>('')
	const [width, setWidth] = useState<string>('100')
	const [height, setHeight] = useState<string>('100')
	const [objectFit, setObjectFit] = useState<string>('cover')
	
	
	const onAdd = () => {
		if (!value || !focus) {
			return
		}
		
		const sizes = getEditorImageSize(sizeType, height, width);
		
		const contentStateWithEntity = editorState
			.getCurrentContent()
			.createEntity('IMAGE', 'IMMUTABLE', {
				src: value,
				width: sizes.width,
				height: sizes.height,
				objectFit
			});
		
		const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
		
		const editorStateWithFocus = EditorState.acceptSelection(
			EditorState.set(editorState, {currentContent: contentStateWithEntity}),
			focus
		);
		setTimeout(() => {
			let newEditorState = AtomicBlockUtils.insertAtomicBlock(editorStateWithFocus, entityKey, '  ');
			newEditorState = EditorState.forceSelection(newEditorState, newEditorState.getSelection());
			setEditorState(newEditorState);
		}, 300)
		onSave?.();
	};
	return (
		<Stack
			sx={sx.root}
			gap={1}
		>
			<Stack
				gap={1}
				sx={sx.inner}
			>
				<EditorImageSelectSizeType
					value={sizeType}
					onChange={setSizeType}
				/>
				
				<EditorImageSelectObjectFit
					value={objectFit}
					onChange={setObjectFit}
				/>
				
				{sizeType === 'fixed_size' && <>
                    <Input
                        onChange={(e) => setWidth(e.target.value)}
                        value={width}
                        label={'Ширина(px)'}
                        type={'number'}
                        size={'small'}
                    />

                    <Input
                        onChange={(e) => setHeight(e.target.value)}
                        value={height}
                        label={'Висота(px)'}
                        type={'number'}
                        size={'small'}
                    />
                </>}
				
				<ClientMediaLibraryInputModal
					initialValue={value}
					onChange={setValue}
					provider={mediaProvider}
					mediaType={'image'}
					label={'Картинка'}
					globalRoles={mediaGlobalRoles}
					rolesByTypes={mediaRolesByTypes}
				/>
			</Stack>
			
			<PrimaryBtn
				onClick={onAdd}
			>
				Додати
			</PrimaryBtn>
		</Stack>
	);
};
