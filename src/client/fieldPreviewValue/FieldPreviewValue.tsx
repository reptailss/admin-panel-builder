import React, {memo, useMemo} from 'react';
import {IField} from "@fields/interfaces/field";
import {FieldsMatcher} from "@fields/helper/FieldsMatcher";
import {IObjectField} from "@fields/interfaces/object";
import {Popover} from "@client/ui/popover/Popover";
import {SecondaryBtn} from "@client/ui/buttons/SecondaryBtn";
import {Icon} from "@iconify/react";
import Stack from "@mui/material/Stack";
import {FieldInfo} from "@client/ui/fieldInfo/FieldInfo";
import {IArrayField} from "@fields/interfaces/array";
import {Paper} from "@mui/material";

export const FieldPreviewValue = ({
									  field,
									  value
								  }: {
	field: IField,
	value: unknown | null
}) => {
	
	if (FieldsMatcher.isArray(field)) {
		return (
			<ArrayView
				field={field}
				value={value}
			/>
		)
	}
	if (FieldsMatcher.isObject(field)) {
		return (
			<ObjectView
				field={field}
				value={value}
			/>
		)
	}
	return (
		<CustomRender
			field={field}
			value={value}
		/>
	
	);
};

const ObjectView = memo(({
							 field,
							 value
						 }: {
	value: unknown | null
	field: IObjectField<any>
}) => {
	if (field.getShowInPopover()) {
		return (
			<Popover
				button={
					<SecondaryBtn
						endIcon={field.getIcon() ? <Icon
							icon={field.getIcon() || ''}
							style={{
								fontSize: '28px'
							}}
						/> : undefined}
					>
						{field.getName()}
					</SecondaryBtn>
				}
			>
				
				<Stack
					gap={'10px'}
					sx={{
						padding: 2,
						minWidth: 320,
					}}
				>
					<FieldInfo
						title={field.getName()}
						icon={field.getIcon()}
					/>
					
					{Object.entries(field.getShape()).map(([key, childField]) => {
						return (
							<FieldPreviewValue
								key={key}
								field={childField as IField}
								value={value && typeof value === 'object' && key in (value as object) ? value[key] : null}
							/>
						)
					})}
				</Stack>
			</Popover>
		)
	}
	
	return (
		<Stack
			gap={'10px'}
		>
			<FieldInfo
				title={field.getName()}
				icon={field.getIcon()}
			/>
			
			{Object.entries(field.getShape()).map(([key, childField]) => {
				return (
					<FieldPreviewValue
						key={key}
						field={childField as IField}
						value={value && key in (value as object) ? value[key] : null}
					/>
				)
			})}
		</Stack>
	)
	
})

const ArrayView = memo(({
							field,
							value,
						}: {
	value: unknown | null
	field: IArrayField<any>
}) => {
	
	if (field.getShowInPopover()) {
		return (
			<Popover
				button={
					<SecondaryBtn
						endIcon={field.getIcon() ? <Icon
							icon={field.getIcon() || ''}
							style={{
								fontSize: '28px'
							}}
						/> : undefined}
					>
						{field.getName()}
					</SecondaryBtn>
				}
			>
				<Stack
					gap={2}
					sx={{
						padding: 2,
						minWidth: 320,
					}}
				>
					<FieldInfo
						title={field.getName()}
						icon={field.getIcon()}
					/>
					
					<Stack
						direction={'row'}
						flexWrap={'wrap'}
						gap={1}
					>
						{(value as any) && Array.isArray(value) && (value as any[]).map((item, index) => (
							<Paper
								key={index}
								variant="outlined"
								sx={{
									p: 2,
									backgroundColor: '#fafafa',
									borderRadius: 2,
								}}
							>
								<FieldPreviewValue
									value={item as any}
									field={field.getShape()}
								/>
							</Paper>
						))}
					</Stack>
				</Stack>
			</Popover>
		)
	}
	
	return (
		<Stack
			gap={2}
		>
			<FieldInfo
				title={field.getName()}
				icon={field.getIcon()}
			/>
			
			{(value as any) && Array.isArray(value) && (value as any[]).map((item, index) => (
				<Paper
					key={index}
					variant="outlined"
					sx={{
						p: 2,
						position: 'relative',
						backgroundColor: '#fafafa',
						borderRadius: 2,
					}}
				>
					<FieldPreviewValue
						value={item as any}
						field={field.getShape()}
					/>
				</Paper>
			))}
		</Stack>
	)
})


const CustomRender = memo((context: {
		value: unknown | null
		field: IField
	}) => {
		const Render = useMemo(() => {
			return context.field.render ? context.field.render.PreviewRender : context.field.defaultRender.PreviewRender
		}, [context.field, context.value]);
		
		const previewRenderConfig = useMemo(() => {
			return context.field.render ? context.field.render.previewRenderConfig : context.field.defaultRender.previewRenderConfig
		}, [context.field, context.value]);
		
		return (
			<Render
				field={context.field}
				value={context.value}
				renderConfig={previewRenderConfig}
			/>
		)
	}
)

