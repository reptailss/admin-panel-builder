import {IField} from "@fields/interfaces/field";
import React from "react";
import {InputWithIcon} from "@client/ui/inputs/InputWithIcon";
import {INumberPreviewRenderConfig, INumberRender} from "@fields/render/interfaces/number";
import {NumberRenderPreviewRenderConfig} from "@fields/render/previewRenderConfig/NumberRenderPreviewRenderConfig";
import {Typography} from "@mui/material";

export class NumberRender implements INumberRender {
	
	public previewRenderConfig = new NumberRenderPreviewRenderConfig()
	
	public FieldRender(props: {
		field: IField<number | null | undefined>,
		initialValue: number | null | undefined
		onChange: (value: number | null | undefined) => void
	}): React.ReactNode {
		return (
			<InputWithIcon
				size={'small'}
				defaultValue={props.initialValue?.toString() || ''}
				label={props.field.getName() || undefined}
				onChange={(e) => props.onChange(e.target.value ? Number(e.target.value) : null)}
				type={'number'}
				startIcon={props.field.getIcon()}
			/>
		)
	}
	
	public PreviewRender(props: {
		field: IField<number | null | undefined>,
		value: number | null | undefined,
		renderConfig: INumberPreviewRenderConfig
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