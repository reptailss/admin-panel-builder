import React, {useEffect, useMemo, useState} from "react";
import {CircularProgress, Typography} from "@mui/material";
import {IEnumAsyncField} from "@fields/interfaces/enum";
import {Select} from "@client/ui/select/Select";
import {IAsyncEnumPreviewRenderConfig, IAsyncEnumRender} from "@fields/render/interfaces/asyncEnum";
import {
	AsyncEnumRenderPreviewRenderConfig
} from "@fields/render/previewRenderConfig/AsyncEnumRenderPreviewRenderConfig";

export class AsyncEnumRender<Value extends readonly string[]> implements IAsyncEnumRender<Value> {
	
	public previewRenderConfig = new AsyncEnumRenderPreviewRenderConfig()
	
	public FieldRender(props: {
		field: IEnumAsyncField<any>,
		initialValue: string | null | undefined
		onChange: (value: string | undefined | null) => void
	}): React.ReactNode {
		const [data, setData] = useState<{
			values: string[]
			labels: Record<string, string> | null
		} | null>(null);
		const [isLoading, setIsLoading] = useState<boolean>(true)
		
		useEffect(() => {
			const init = async () => {
				try {
					setIsLoading(true);
					const newData = await props.field.getValues()
					setData(newData)
					setIsLoading(false);
				} catch (error) {
					console.log(error)
					setData(null)
					setIsLoading(false);
				}
			}
			init();
		}, [])
		
		const options: {
			value: string
			label: string
		}[] = useMemo(() => {
			if (!data?.values?.length) {
				return []
			}
			return data.values.map((value) => {
				return {
					value,
					label: data.labels && value in data.labels ? data.labels[value] : value
				}
			})
		}, [data])
		
		if (isLoading) {
			return (
				<CircularProgress/>
			)
		}
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
		value: string | null | undefined
		renderConfig: IAsyncEnumPreviewRenderConfig
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