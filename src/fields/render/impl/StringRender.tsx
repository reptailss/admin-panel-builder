import {IField} from "@fields/interfaces/field";
import React from "react";
import {InputWithIcon} from "@client/ui/inputs/InputWithIcon";
import {Typography} from "@mui/material";
import {StringRenderPreviewRenderConfig} from "@fields/render/previewRenderConfig/StringRenderPreviewRenderConfig";
import {IStringPreviewRenderConfig, IStringRender} from "@fields/render/interfaces/string";


export class StringRender implements IStringRender {
	
	public previewRenderConfig = new StringRenderPreviewRenderConfig()
	
	public FieldRender(props: {
		field: IField<string | null | undefined>,
		initialValue: string | null | undefined
		onChange: (value: string | undefined | null) => void
	}): React.ReactNode {
		return (
			<InputWithIcon
				size={'small'}
				defaultValue={props.initialValue || ''}
				label={props.field.getName() || undefined}
				onChange={(e) => props.onChange(e.target.value)}
				startIcon={props.field.getIcon()}
			/>
		)
	}
	
	public PreviewRender(props: {
		field: IField<string | null | undefined>,
		value: string | null | undefined
		renderConfig: IStringPreviewRenderConfig
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