import React, {useMemo, useState} from 'react';
import {OnSaveAccess} from "@client/usersAccess/types/events";
import {MultiSelect} from "@client/ui/select/MultiSelect";
import Stack from "@mui/material/Stack";
import sx from './sx'
import {PrimaryBtn} from "@client/ui/buttons/PrimaryBtn";
import {DeleteBtn} from "@client/ui/buttons/DeleteBtn";

export const ClientMutateAccess = ({
									   initial,
									   allRoles,
									   onSaveAccess,
									   guards,
									   onDeleteAccess,
								   }: {
	initial?: string[] | null
	onSaveAccess: OnSaveAccess
	onDeleteAccess: () => void
	allRoles: Array<string | {
		value: string
		label: string
	}>
	guards: {
		save: boolean
		delete: boolean
	}
}) => {
	
	const [targetRoles, setTargetRoles] = useState<string[]>(initial || []);
	
	const options: {
		value: string
		label: string
	}[] = useMemo(() => {
		if (!allRoles?.length) {
			return []
		}
		return allRoles.map((item) => {
			if (typeof item === "string") {
				return {
					value: item,
					label: item
				}
			}
			return item;
		})
	}, [allRoles])
	
	return (
		<Stack
			gap={1}
			sx={sx.root}
		>
			<MultiSelect
				options={options}
				value={targetRoles}
				onChange={setTargetRoles}
			/>
			
			{guards.save && <PrimaryBtn
                onClick={async () => {
					await onSaveAccess(targetRoles)
				}}
            >
                Зберегти
            </PrimaryBtn>}
			
			{guards.delete && <DeleteBtn
                onClick={onDeleteAccess}
            >
                Видалити
            </DeleteBtn>}
		
		</Stack>
	);
};

