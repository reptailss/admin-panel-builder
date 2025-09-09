import React from "react";
import {Input} from "@client/ui/inputs/Input";
import {IDateRender} from "@fields/render/interfaces/date";
import {DateRenderPreviewRenderConfig} from "@fields/render/previewRenderConfig/DateRenderPreviewRenderConfig";
import {Typography} from "@mui/material";
import {IAbstractField} from "@fields/interfaces/abstractField";


function formatDate(date: Date): string {
	const pad = (n: number) => n.toString().padStart(2, '0');
	
	const day = pad(date.getDate());
	const month = pad(date.getMonth() + 1); // місяці з 0
	const year = date.getFullYear();
	
	const hours = pad(date.getHours());
	const minutes = pad(date.getMinutes());
	
	return `${day}-${month}-${year} ${hours}:${minutes}`;
}

function format(date: Date | string): string {
	if (typeof date === "string") {
		return date
	}
	return new Date(date).toISOString()
}

export class DateRender implements IDateRender {
	
	public previewRenderConfig = new DateRenderPreviewRenderConfig()
	
	public FieldRender(props: {
		field: IAbstractField<Date | null | undefined>
		initialValue: Date | null | undefined;
		onChange: (value: Date) => void
	}): React.ReactNode {
		return (
			<Input
				size={'small'}
				defaultValue={props.initialValue || ''}
				label={props.field.getName() || undefined}
				onChange={(e) => props.onChange(new Date(e.target.value))}
			/>
		)
	}
	
	public PreviewRender(props: {
		field: IAbstractField<Date | null | undefined>
		value: Date | null | undefined
		renderConfig: DateRenderPreviewRenderConfig
	}): React.ReactNode {
		if (!props.value) {
			return null
		}
		return (
			<Typography
				sx={{
					fontSize: props.renderConfig?.getFontSize() || undefined,
					margin: props.renderConfig?.getMargin() || undefined,
					padding: props.renderConfig?.getPadding() || undefined,
					color: props.renderConfig?.getColor() || undefined,
				}}
			>
				{props.renderConfig.getFormatDate() ? formatDate(new Date(props.value)) : format(props.value)}
			</Typography>
		)
	}
}