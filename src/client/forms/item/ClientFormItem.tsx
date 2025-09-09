import React from 'react';
import {Box, IconButton} from "@mui/material";
import sx from './sx'
import {IField} from "@fields/interfaces/field";
import {FieldPreviewValue} from "@client/fieldPreviewValue/FieldPreviewValue";
import Stack from "@mui/material/Stack";
import {EditIconSvg} from "@client/icons/EditIconSvg";
import {DeleteIconSvg} from "@client/icons/DeleteIconSvg";
import {OnDeleteForm, OnEditForm} from "@client/forms/types/events";

type GetCardPreviewValueCb<Form extends object, Field extends IField> = (post: Form) => Field['_value']

export function ClientFormItem<Form extends object>({
														form,
														onDeleteForm,
														onEditForm,
														cardPreviewFields,
														guards,
													}: {
	form: Form
	onDeleteForm: OnDeleteForm
	onEditForm: OnEditForm
	cardPreviewFields: Array<{
		value: keyof Form | GetCardPreviewValueCb<Form, IField<any>>
		field: IField<Form[keyof Form]> | IField<any>
	}>
	guards: {
		read: boolean
		update: boolean
		delete: boolean
	}
}) {
	
	
	return (
		<Box
			sx={sx.root}
		>
			
			<Box sx={sx.overlay}/>
			
			<Stack
				direction={'row'}
				justifyContent={'flex-end'}
			>
				{guards.update && <IconButton
                    onClick={() => onEditForm(form)}
                >
                    <EditIconSvg color={'white'}/>
                </IconButton>}
				
				{guards.delete && <IconButton
                    onClick={() => onDeleteForm(form)}
                >
                    <DeleteIconSvg color={'white'}/>
                </IconButton>}
			</Stack>
			
			<Box
				sx={sx.content}
			>
				{cardPreviewFields.length >= 1 && cardPreviewFields.map((preview, index) => {
					const value = typeof preview.value === 'function' ? preview.value(form) : form[preview.value]
					return (
						<FieldPreviewValue
							key={index}
							field={preview.field}
							value={value}
						/>
					)
				})}
			
			</Box>
		</Box>
	);
};

