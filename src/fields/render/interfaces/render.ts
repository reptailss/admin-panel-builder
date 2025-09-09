import {IAbstractField} from "@fields/interfaces/abstractField";
import {ReactNode} from "react";

export interface IRender<
	Value,
	PreviewRenderConfig = any,
	Field extends IAbstractField = IAbstractField<Value | undefined | null>,
> {
	previewRenderConfig: PreviewRenderConfig
	
	FieldRender(props: {
		field: Field
		initialValue: Value | null | undefined
		onChange: (value: Value) => void
	}): ReactNode
	
	PreviewRender(
		props: {
			field: Field
			value: Value | null | undefined
			renderConfig: PreviewRenderConfig
		}
	): ReactNode
}
