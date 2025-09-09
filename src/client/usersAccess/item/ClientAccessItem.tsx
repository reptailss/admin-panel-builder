import React from 'react';
import {Box, IconButton} from "@mui/material";
import sx from './sx'
import {IField} from "@fields/interfaces/field";
import {FieldPreviewValue} from "@client/fieldPreviewValue/FieldPreviewValue";
import Stack from "@mui/material/Stack";
import {EditIconSvg} from "@client/icons/EditIconSvg";
import {OnEditAccess} from "@client/usersAccess/types/events";

type GetUserPreviewValueCb<UserInfo extends object, Field extends IField> = (userInfo: UserInfo) => Field['_value']


export function ClientAccessItem<UserInfo extends object>({
															  userInfo,
															  onEditAccess,
															  userPreviewFields,
															  guards,
														  }: {
	userInfo: UserInfo
	onEditAccess: OnEditAccess
	userPreviewFields: Array<{
		value: keyof UserInfo | GetUserPreviewValueCb<UserInfo, IField<any>>
		field: IField<UserInfo[keyof UserInfo]> | IField<any>
	}>
	guards: {
		save: boolean
		delete: boolean
	}
}) {
	
	return (
		<Box
			sx={sx.root}
		>
			
			<Stack
				direction={'row'}
				justifyContent={'flex-end'}
			>
				{(guards.save || guards.delete) && <IconButton
                    onClick={() => onEditAccess(userInfo)}
                >
                    <EditIconSvg color={'white'}/>
                </IconButton>}
			</Stack>
			
			<Box
				sx={sx.content}
			>
				{userPreviewFields.length >= 1 && userPreviewFields.map((preview, index) => {
					const value = typeof preview.value === 'function' ? preview.value(userInfo) : userInfo[preview.value]
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

