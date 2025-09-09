import React, {memo, ReactNode, useCallback, useState} from 'react';
import {IField} from "@fields/interfaces/field";
import {
	OnAddToArrayValueBuilder,
	OnChangeUnionTypeValueBuilder,
	OnChangeValueBuilder,
	OnClosePopoverValueBuilder,
	OnDeleteFromArrayValueBuilder
} from "@client/valueBuilder/types/events";
import {ValueBuilderViewHelper} from "@client/valueBuilder/helper/ValueBuilderViewHelper";
import Stack from "@mui/material/Stack";
import {ValueBuilderFieldView} from "@client/valueBuilder/ValueBuilderFieldsTypes";
import {PrimaryBtn} from "@client/ui/buttons/PrimaryBtn";
import {DeleteBtn} from "@client/ui/buttons/DeleteBtn";


export const ClientValueBuilder = memo(function ({
													 initialValue,
													 field,
													 onSave,
													 onDelete,
													 actionsChildren,
												 }: {
	initialValue: any | null
	field: IField
	onSave?: <Value>(value: Value) => void
	onDelete?: () => void
	actionsChildren?: ReactNode
}) {
	const [value, setValue] = useState<unknown | null>(initialValue || field.getInitialValue())
	const [targetInitialValue, setInitialValue] = useState<unknown | null>(value)
	const onChange: OnChangeValueBuilder<unknown> = useCallback((
		newValue,
		field,
		path
	) => {
		if (!path) {
			setValue(newValue)
			return
		}
		setValue((prev) => {
			return ValueBuilderViewHelper.mergeValue(prev, path, newValue) as unknown
		})
	}, [])
	
	const onAddToArray: OnAddToArrayValueBuilder<unknown> = useCallback((
		newValue,
		field,
		path
	) => {
		if (!path) {
			setValue((prev) => {
				if (!prev || !Array.isArray(prev)) {
					const value = [newValue] as unknown
					setInitialValue(value)
					return value
				}
				const value = [
					...prev,
					newValue
				] as unknown
				setInitialValue(value)
				return value
			})
			return
		}
		
		setValue((prev) => {
			const value = ValueBuilderViewHelper.addToArray(prev, path, newValue) as unknown
			setInitialValue(value)
			return value
		})
	}, [])
	
	const onDeleteFromArray: OnDeleteFromArrayValueBuilder<unknown> = useCallback((field, path) => {
		setValue((prev) => {
			const value = ValueBuilderViewHelper.deleteFromArray(prev, path) as unknown
			setInitialValue(value)
			return value
		})
	}, [])
	
	const onClosePopover: OnClosePopoverValueBuilder<unknown> = useCallback((
		field,
		path
	) => {
		setValue((prev) => {
			setInitialValue(prev)
			return prev
		})
	}, [onSave])
	
	const onChangeUnionTypeValueBuilder: OnChangeUnionTypeValueBuilder<unknown> = useCallback((
		newValue, field, path) => {
		if (!path) {
			setValue(newValue)
			setInitialValue(value)
			return
		}
		setValue((prev) => {
			const targetNewValue = ValueBuilderViewHelper.mergeValue(prev, path, newValue) as unknown
			setInitialValue(targetNewValue)
			return targetNewValue
		})
	}, [])
	return (
		<Stack
			gap={1}
		>
			<ValueBuilderFieldView
				field={field}
				initialValue={targetInitialValue}
				path={null}
				onChange={onChange}
				onAddToArray={onAddToArray}
				onDeleteFromArray={onDeleteFromArray}
				onClosePopover={onClosePopover}
				onChangeUnionTypeValueBuilder={onChangeUnionTypeValueBuilder}
				hideName
			/>
			<Stack
				sx={{
					marginTop: '20px'
				}}
				direction={'row'}
				alignItems={'center'}
				gap={1}
				flexWrap={'wrap'}
			>
				{onSave && <PrimaryBtn
                    onClick={() => onSave(value)}
                >
                    Зберегти
                </PrimaryBtn>}
				
				{onDelete && <DeleteBtn
                    onClick={onDelete}
                >
                    Видалити
                </DeleteBtn>}
				
				{actionsChildren && actionsChildren}
			</Stack>
		</Stack>
	)
})
