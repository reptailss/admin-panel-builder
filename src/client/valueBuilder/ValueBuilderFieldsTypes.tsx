import React, {memo, useCallback, useMemo, useState} from "react";
import {IField} from "@fields/interfaces/field";
import {
	OnAddToArrayValueBuilder,
	OnChangeUnionTypeValueBuilder,
	OnChangeValueBuilder,
	OnClosePopoverValueBuilder,
	OnDeleteFromArrayValueBuilder,
} from "@client/valueBuilder/types/events";
import {FieldsMatcher} from "@fields/helper/FieldsMatcher";
import {IObjectField} from "@fields/interfaces/object";
import {Popover} from "@client/ui/popover/Popover";
import {IconButton, Paper, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";
import {EditIconSvg} from "@client/icons/EditIconSvg";
import {IArrayField} from "@fields/interfaces/array";
import {DeleteIconSvg} from "@client/icons/DeleteIconSvg";
import {SecondaryBtn} from "@client/ui/buttons/SecondaryBtn";
import {AddBtn} from "@client/ui/buttons/AddBtn";
import {Icon} from "@iconify/react";
import {FieldInfo} from "@client/ui/fieldInfo/FieldInfo";
import {Select} from "@client/ui/select/Select";
import {IUnionField, IUnionFieldValue} from "@fields/interfaces/union";

export const ValueBuilderFieldView = memo((context: {
	initialValue: unknown | null
	field: IField<unknown>
	path: string | null
	onChange: OnChangeValueBuilder<unknown>
	onAddToArray: OnAddToArrayValueBuilder<unknown>
	onDeleteFromArray: OnDeleteFromArrayValueBuilder<unknown>
	onClosePopover: OnClosePopoverValueBuilder<unknown>
	hideName?: boolean
	onChangeUnionTypeValueBuilder: OnChangeUnionTypeValueBuilder<unknown>
}) => {
	
	if (FieldsMatcher.isArray(context.field)) {
		return (
			<ClientArrayField
				field={context.field}
				initialValue={context.initialValue}
				path={context.path}
				onChange={context.onChange}
				onAddToArray={context.onAddToArray}
				onDeleteFromArray={context.onDeleteFromArray}
				onClosePopover={context.onClosePopover}
				onChangeUnionTypeValueBuilder={context.onChangeUnionTypeValueBuilder}
			/>
		)
	}
	if (FieldsMatcher.isObject(context.field)) {
		return (
			<ObjectFieldView
				field={context.field}
				initialValue={context.initialValue}
				path={context.path}
				onChange={context.onChange}
				onAddToArray={context.onAddToArray}
				onDeleteFromArray={context.onDeleteFromArray}
				onClosePopover={context.onClosePopover}
				hideName={context.hideName}
				onChangeUnionTypeValueBuilder={context.onChangeUnionTypeValueBuilder}
			/>
		)
	}
	
	if (FieldsMatcher.isUnion(context.field)) {
		return (
			<ClientUnionField
				field={context.field}
				initialValue={context.initialValue}
				path={context.path}
				onChange={context.onChange}
				onAddToArray={context.onAddToArray}
				onDeleteFromArray={context.onDeleteFromArray}
				onClosePopover={context.onClosePopover}
				onChangeUnionTypeValueBuilder={context.onChangeUnionTypeValueBuilder}
			/>
		)
	}
	
	return (
		<CustomRender
			initialValue={context.initialValue}
			field={context.field}
			path={context.path}
			onChange={context.onChange}
		/>
	)
})

const CustomRender = memo((context: {
		initialValue: unknown | null
		field: IField
		path: string | null
		onChange: OnChangeValueBuilder<unknown>
	}) => {
		const Render = useMemo(() => {
			return context.field.render ? context.field.render.FieldRender : context.field.defaultRender.FieldRender
		}, [context.field, context.initialValue]);
		
		const handleChange = useCallback((value: unknown | null | undefined) => {
			context.onChange(value as any, context.field, context.path)
		}, [context.onChange])
		
		return (
			<Render
				field={context.field}
				initialValue={context.initialValue}
				onChange={handleChange}
			/>
		)
	}
)

const ObjectFieldView = memo(({
								  field,
								  initialValue,
								  path,
								  onChange,
								  onAddToArray,
								  onDeleteFromArray,
								  onClosePopover,
								  hideName,
								  onChangeUnionTypeValueBuilder,
							  }: {
	initialValue: unknown | null
	field: IObjectField<any>
	path: string | null
	onChange: OnChangeValueBuilder<unknown>
	onAddToArray: OnAddToArrayValueBuilder<unknown>
	onDeleteFromArray: OnDeleteFromArrayValueBuilder<unknown>
	onClosePopover: OnClosePopoverValueBuilder<unknown>
	hideName?: boolean
	onChangeUnionTypeValueBuilder: OnChangeUnionTypeValueBuilder<unknown>
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
						/> : <EditIconSvg color={'white'}/>}
					>
						{field.getName()}
					</SecondaryBtn>
				}
				onClose={() => onClosePopover(field as IField, path)}
			>
				
				<Stack
					gap={1}
					sx={{
						padding: 2,
						minWidth: 320,
					}}
				>
					{!hideName && <FieldInfo
                        title={field.getName()}
                        icon={field.getIcon()}
                    />}
					
					{Object.entries(field.getShape()).map(([key, childField]) => {
						return (
							<ValueBuilderFieldView
								field={childField as IField}
								key={key}
								onChange={onChange}
								initialValue={initialValue && typeof initialValue === 'object' && key in (initialValue as object) ? initialValue[key] : null}
								path={path ? `${path}.${key}` : key}
								onAddToArray={onAddToArray}
								onDeleteFromArray={onDeleteFromArray}
								onClosePopover={onClosePopover}
								onChangeUnionTypeValueBuilder={onChangeUnionTypeValueBuilder}
							/>
						)
					})}
				</Stack>
			</Popover>
		)
	}
	
	return (
		<Stack
			gap={2}
		>
			{!hideName && <FieldInfo
                title={field.getName()}
                icon={field.getIcon()}
            />}
			
			{Object.entries(field.getShape()).map(([key, childField]) => {
				return (
					<ValueBuilderFieldView
						field={childField as IField}
						key={key}
						onChange={onChange}
						initialValue={initialValue && typeof initialValue === 'object' && key in (initialValue as object) ? initialValue[key] : null}
						path={path ? `${path}.${key}` : key}
						onAddToArray={onAddToArray}
						onDeleteFromArray={onDeleteFromArray}
						onClosePopover={onClosePopover}
						onChangeUnionTypeValueBuilder={onChangeUnionTypeValueBuilder}
					/>
				)
			})}
		</Stack>
	)
	
})


const ClientUnionField = memo(({
								   field,
								   initialValue,
								   path,
								   onChange,
								   onAddToArray,
								   onDeleteFromArray,
								   onClosePopover,
								   onChangeUnionTypeValueBuilder,
							   }: {
	initialValue: unknown | null
	field: IUnionField<any>
	path: string | null
	onChange: OnChangeValueBuilder<unknown>
	onAddToArray: OnAddToArrayValueBuilder<unknown>
	onDeleteFromArray: OnDeleteFromArrayValueBuilder<unknown>
	onClosePopover: OnClosePopoverValueBuilder<unknown>
	onChangeUnionTypeValueBuilder: OnChangeUnionTypeValueBuilder<unknown>
}) => {
	const [targetUnionValueIndex, setTargetUnionValueIndex] = useState<string>(() => {
		const shape: IUnionFieldValue[] = field.getShape()
		let value = ''
		if (shape.length) {
			shape.forEach((unionValue, index) => {
				const math = unionValue.math(initialValue)
				if (math) {
					value = index.toString()
				}
			})
		}
		return value
	})
	
	const selectOptions = useMemo(() => {
		return field.getShape()?.map((shape: IUnionFieldValue, index: number) => {
			return {
				value: index.toString(),
				label: shape.field.getName() || `Варіант - ${index + 1}`
			}
		})
	}, [field])
	
	const targetField: IField | null = useMemo(() => {
		const unionValue: IUnionFieldValue = field.getShape().find((_, i) => i.toString() === targetUnionValueIndex.toString())
		if (!unionValue?.field) {
			return null
		}
		return unionValue.field
	}, [field, targetUnionValueIndex])
	
	const handleChange = useCallback((newTargetUnionValueIndex: string) => {
		
		const unionValue: IUnionFieldValue = field.getShape().find((_, i: number) => i.toString() === newTargetUnionValueIndex.toString())
		setTargetUnionValueIndex(newTargetUnionValueIndex)
		if (!unionValue?.field) {
			return
		}
		const newValue = unionValue.field.getInitialValue()
		onChangeUnionTypeValueBuilder(newValue, unionValue.field, path)
	}, [field])
	
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
						/> : <EditIconSvg color={'white'}/>}
					>
						{field.getName()}
					</SecondaryBtn>
				}
				onClose={() => onClosePopover(field as IField, path)}
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
					
					{!targetField && <Typography>
                        Оберіть тип
                    </Typography>}
					
					<Select
						label={'Тип'}
						options={selectOptions}
						value={targetUnionValueIndex}
						onChange={handleChange}
					/>
					
					{targetField && <ValueBuilderFieldView
                        field={targetField}
                        initialValue={initialValue}
                        onChange={onChange}
                        onAddToArray={onAddToArray}
                        path={path}
                        onDeleteFromArray={onDeleteFromArray}
                        onClosePopover={onClosePopover}
                        onChangeUnionTypeValueBuilder={onChangeUnionTypeValueBuilder}
                    />}
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
			
			{!targetField && <Typography>
                Оберіть тип
            </Typography>}
			
			<Select
				label={'Тип'}
				options={selectOptions}
				value={targetUnionValueIndex}
				onChange={handleChange}
			/>
			
			{targetField && <ValueBuilderFieldView
                field={targetField}
                initialValue={initialValue}
                onChange={onChange}
                onAddToArray={onAddToArray}
                path={path}
                onDeleteFromArray={onDeleteFromArray}
                onClosePopover={onClosePopover}
                onChangeUnionTypeValueBuilder={onChangeUnionTypeValueBuilder}
            />}
		</Stack>
	)
})


const ClientArrayField = memo(({
								   field,
								   initialValue,
								   path,
								   onChange,
								   onAddToArray,
								   onDeleteFromArray,
								   onClosePopover,
								   onChangeUnionTypeValueBuilder,
							   }: {
	initialValue: unknown | null
	field: IArrayField<any>
	path: string | null
	onChange: OnChangeValueBuilder<unknown>
	onAddToArray: OnAddToArrayValueBuilder<unknown>
	onDeleteFromArray: OnDeleteFromArrayValueBuilder<unknown>
	onClosePopover: OnClosePopoverValueBuilder<unknown>
	onChangeUnionTypeValueBuilder: OnChangeUnionTypeValueBuilder<unknown>
}) => {
	
	const addToTargetArray = useCallback(() => {
		onAddToArray(field.getShape().getInitialValue(), field as unknown as IField, path)
	}, [field,path])
	
	const deleteFromTargetArray = useCallback((i: number) => {
		onDeleteFromArray(field as unknown as IField, path ? `${path}[${i}]` : i.toString())
	}, [field,path])
	
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
						/> : <EditIconSvg color={'white'}/>}
					>
						{field.getName()}
					</SecondaryBtn>
				}
				onClose={() => onClosePopover(field as IField, path)}
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
					
					<AddBtn
						onClick={addToTargetArray}
						sx={{
							maxWidth: '100px'
						}}
					>
						Додати
					</AddBtn>
					
					<Stack
						direction={'row'}
						flexWrap={'wrap'}
						gap={1}
					>
						{(initialValue as any) && Array.isArray(initialValue) && (initialValue as any[]).map((item, index) => (
							<Paper
								key={index}
								variant="outlined"
								sx={{
									p: 2,
									backgroundColor: '#fafafa',
									borderRadius: 2,
								}}
							>
								<Stack
									direction={'row'}
									justifyContent={'flex-end'}
									sx={{mb: 1}}
								>
									<IconButton
										onClick={() => deleteFromTargetArray(index)}
										size="small"
									>
										<DeleteIconSvg/>
									</IconButton>
								</Stack>
								
								<ValueBuilderFieldView
									initialValue={item as any}
									field={field.getShape()}
									path={path ? `${path}[${index}]` : index.toString()}
									onChange={onChange}
									onAddToArray={onAddToArray}
									onDeleteFromArray={onDeleteFromArray}
									onClosePopover={onClosePopover}
									onChangeUnionTypeValueBuilder={onChangeUnionTypeValueBuilder}
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
			
			<AddBtn
				onClick={addToTargetArray}
				sx={{alignSelf: 'start'}}
			>
				Додати
			</AddBtn>
			
			{(initialValue as any) && Array.isArray(initialValue) && (initialValue as any[]).map((item, index) => (
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
					<IconButton
						onClick={() => deleteFromTargetArray(index)}
						size="small"
						sx={{mb: 1}}
					>
						<DeleteIconSvg/>
					</IconButton>
					
					<ValueBuilderFieldView
						initialValue={item as any}
						field={field.getShape()}
						path={path ? `${path}[${index}]` : index.toString()}
						onChange={onChange}
						onAddToArray={onAddToArray}
						onDeleteFromArray={onDeleteFromArray}
						onClosePopover={onClosePopover}
						onChangeUnionTypeValueBuilder={onChangeUnionTypeValueBuilder}
					/>
				</Paper>
			))}
		</Stack>
	)
})
