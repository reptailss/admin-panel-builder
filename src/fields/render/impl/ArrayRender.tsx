import {IField} from "@fields/interfaces/field";
import React from "react";
import {FieldInfo} from "@client/ui/fieldInfo/FieldInfo";
import {IArrayRender} from "@fields/render/interfaces/array";

export class ArrayRender<
	Value,
> implements IArrayRender<Value> {
	
	public previewRenderConfig = null
	
	public FieldRender(props: {
		field: IField<Value>
		initialValue: Value;
		onChange: (value: Value) => void
	}): React.ReactNode {
		return null
	}
	
	public PreviewRender(props: {
		field: IField<Value>
		value: Value | null | undefined
		renderConfig: null
	}): React.ReactNode {
		return (
			<FieldInfo
				icon={props.field.getIcon()}
				title={props.field.getName()}
			/>
		)
	}
}