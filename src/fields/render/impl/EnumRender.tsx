import React from "react";
import {IEnumAsyncField, IEnumField} from "@fields/interfaces/enum";
import {Select} from "@client/ui/select/Select";
import {IEnumPreviewRenderConfig, IEnumRender} from "@fields/render/interfaces/enum";
import {EnumRenderPreviewRenderConfig} from "@fields/render/previewRenderConfig/EnumRenderPreviewRenderConfig";
import {Typography} from "@mui/material";

export class EnumRender<Value extends readonly string[]> implements IEnumRender<Value> {
	
	public previewRenderConfig = new EnumRenderPreviewRenderConfig()
	
	public FieldRender(props: {
		field: IEnumField<any>,
		initialValue: string | null | undefined
		onChange: (value: string | undefined | null) => void
	}): React.ReactNode {
		const labels = props.field.getLabels()
		const options: {
			value: string
			label: string
		}[] = props.field.getValues().map((value: string) => {
			return {
				value,
				label: labels && value in labels ? labels[value] : value
			}
		}) || []
		return (
			<Select
				options={options}
				value={props.initialValue || ''}
				onChange={props.onChange}
				label={props.field.getName() || ''}
			/>
		)
	}
	
	public PreviewRender(props: {
		field: IEnumAsyncField<any>,
		value: string | null | undefined,
		renderConfig: IEnumPreviewRenderConfig
	}): React.ReactNode {
		return (
			<Typography
				sx={{
					fontSize: props.renderConfig?.getFontSize() || undefined,
					margin: props.renderConfig?.getMargin() || undefined,
					padding: props.renderConfig?.getPadding() || undefined,
					color: props.renderConfig?.getColor() || undefined,
				}}
			>
				{props.value}
			</Typography>
		)
	}
}