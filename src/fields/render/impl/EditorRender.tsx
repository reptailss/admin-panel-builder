import React from "react";
import {Editor} from "@client/editor/Editor";
import {IEditorRender} from "@fields/render/interfaces/editor";
import {IAbstractField} from "@fields/interfaces/abstractField";
import {Typography} from "@mui/material";
import {IEditorField} from "@fields/interfaces/string";

const MEDIA_ROLES_BY_TYPES = {}
const MEDIA_GLOBAL_ROLES = []
export class EditorRender<Field extends IEditorField = IEditorField> implements IEditorRender {
	
	public previewRenderConfig = null
	
	public FieldRender(props: {
		field: Field
		initialValue: string | null | undefined;
		onChange: (value: string) => void
	}): React.ReactNode {
		return (
			<Editor
				initial={props.initialValue || ''}
				onChange={(value) => props.onChange(value)}
				mediaGlobalRoles={MEDIA_GLOBAL_ROLES}
				mediaRolesByTypes={MEDIA_ROLES_BY_TYPES}
				mediaProvider={props.field.mediaProvider}
			/>
		)
	}
	
	public PreviewRender(props: {
		field: IAbstractField<string | null | undefined>
		value: string | null | undefined
	}): React.ReactNode {
		return (
			<Typography
				dangerouslySetInnerHTML={{
					__html: props.value || ''
				}}
			/>
		)
	}
}