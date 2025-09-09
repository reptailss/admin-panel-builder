import {IField} from "@fields/interfaces/field";
import React from "react";
import {InputWithIcon} from "@client/ui/inputs/InputWithIcon";
import {Typography} from "@mui/material";
import {ILiteralPreviewRenderConfig, ILiteralRender} from "@fields/render/interfaces/literal";
import {LiteralRenderPreviewRenderConfig} from "@fields/render/previewRenderConfig/LiteralRenderPreviewRenderConfig";
import {FieldsMatcher} from "@fields/helper/FieldsMatcher";


export class LiteralRender<Value extends string> implements ILiteralRender<Value> {
	
	public previewRenderConfig = new LiteralRenderPreviewRenderConfig()
	
	public FieldRender(props: {
		field: IField<Value | null | undefined>,
		initialValue: Value | null | undefined
		onChange: (value: Value | undefined | null) => void
	}): React.ReactNode {
		if (FieldsMatcher.isLiteral(props.field) && props.field.isHideFieldInRender()) {
			return null
		}
		return (
			<InputWithIcon
				size={'small'}
				defaultValue={props.initialValue || ''}
				label={props.field.getName() || undefined}
				onChange={(e) => {
				}}
				startIcon={props.field.getIcon()}
				disabled
			/>
		)
	}
	
	public PreviewRender(props: {
		field: IField<Value | null | undefined>,
		value: Value | null | undefined
		renderConfig: ILiteralPreviewRenderConfig
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