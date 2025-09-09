import React, {useState} from 'react';

import sx from './sx'
import Stack from "@mui/material/Stack";
import {EditorImageSizeType, OnChangeEditorImageToolbar} from "@client/editor/toolbars/image/types";
import {Input} from "@client/ui/inputs/Input";
import {PrimaryBtn} from "@client/ui/buttons/PrimaryBtn";
import {EditorImageSelectSizeType} from "@client/editor/toolbars/image/select/EditorImageSelectSizeType";
import {ClientMediaLibraryInputModal} from "@client/mediaLibrary/ClientMediaLibraryInputModal";
import {IMediaValueProvider} from "@fields/interfaces/mediaValueProvider";

const getEditorImageSize = (sizeType: EditorImageSizeType, height: string, width: string,) => {
	switch (sizeType) {
		case 'fixed_size':
			return {
				width: width + 'px',
				height: height + 'px',
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


export const EditorImageToolbar = ({
									   
									   onChange,
									   mediaProvider,
									   mediaRolesByTypes,
									   mediaGlobalRoles,
									   onSave
								   }: {
	onChange: OnChangeEditorImageToolbar
	mediaProvider: IMediaValueProvider
	mediaGlobalRoles: readonly string[]
	mediaRolesByTypes: {
		createFolder?: readonly string[]
		updateFolder?: readonly string[]
		deleteFolder?: readonly string[]
		createFile?: readonly string[]
		deleteFile?: readonly string[]
	}
	onSave?: () => void
}) => {
	
	
	const [sizeType, setSizeType] = useState<EditorImageSizeType>('auto_size')
	const [value, setValue] = useState<string>('')
	const [width, setWidth] = useState<string>('')
	const [height, setHeight] = useState<string>('')
	
	
	const onAdd = () => {
		const sizes = getEditorImageSize(sizeType, height, width)
		
		onChange(value, sizes.height, sizes.width, 'image')
		onSave && onSave()
	}
	
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
