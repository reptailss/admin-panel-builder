import React from "react";
import {FormControlLabel, Switch, Typography} from "@mui/material";
import {IBooleanNumRender} from "@fields/render/interfaces/booleanNum";
import {IAbstractField} from "@fields/interfaces/abstractField";

export class BooleanNumRender implements IBooleanNumRender {
	
	public previewRenderConfig = null
	
	public FieldRender(props: {
		field: IAbstractField<0 | 1 | null | undefined>
		initialValue: 0 | 1 | null | undefined
		onChange: (value: 0 | 1) => void
	}): React.ReactNode {
		return (
			<FormControlLabel
				control={<Switch
					defaultChecked={props.initialValue === 1}
					onChange={(e) => props.onChange(e.target.checked ? 1 : 0)}
				/>}
				label={props.field.getName() || undefined}
			/>
		)
	}
	
	public PreviewRender(props: {
		field: IAbstractField<0 | 1 | null | undefined>
		value: 0 | 1 | null | undefined
	}): React.ReactNode {
		return (
			<Typography>
				{props.value}
			</Typography>
		)
	}
}