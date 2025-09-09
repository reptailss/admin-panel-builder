import React from "react";
import {InputWithIcon} from "@client/ui/inputs/InputWithIcon";
import {IMultilinePreviewRenderConfig, IMultilineRender} from "@fields/render/interfaces/multiline";
import {
	MultilineRenderPreviewRenderConfig
} from "@fields/render/previewRenderConfig/MultilineRenderPreviewRenderConfig";
import {Typography} from "@mui/material";
import {IAbstractField} from "@fields/interfaces/abstractField";

export class MultilineRender implements IMultilineRender {
	
	public previewRenderConfig = new MultilineRenderPreviewRenderConfig()
	
	public FieldRender(props: {
		field: IAbstractField<string | null | undefined>
		initialValue: string | null | undefined;
		onChange: (value: string) => void
	}): React.ReactNode {
		return (
			<InputWithIcon
				size={'small'}
				multiline
				rows={4}
				defaultValue={props.initialValue || ''}
				label={props.field.getName() || undefined}
				onChange={(e) => props.onChange(e.target.value)}
				startIcon={props.field.getIcon()}
			/>
		)
	}
	
	public PreviewRender(props: {
		field: IAbstractField<string | null | undefined>
		value: string | null | undefined,
		renderConfig: IMultilinePreviewRenderConfig
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