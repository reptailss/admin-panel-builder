import React from "react";
import {FormControlLabel, Switch, Typography} from "@mui/material";
import {IBooleanRender} from "@fields/render/interfaces/boolean";
import {IAbstractField} from "@fields/interfaces/abstractField";

export class BooleanRender implements IBooleanRender {
	
	public previewRenderConfig = null
	
	public FieldRender(props: {
		field: IAbstractField<boolean | null | undefined>
		initialValue: boolean | null | undefined
		onChange: (value: boolean) => void
	}): React.ReactNode {
		return (
			<FormControlLabel
				control={<Switch
					defaultChecked={props.initialValue || false}
					onChange={(e) => props.onChange(e.target.checked)}
				/>}
				label={props.field.getName() || undefined}
			/>
		)
	}
	
	public PreviewRender(props: {
		field: IAbstractField<boolean | null | undefined>
		value: boolean | null | undefined
	}): React.ReactNode {
		return (
			<Typography>
				{props.value}
			</Typography>
		)
	}
}