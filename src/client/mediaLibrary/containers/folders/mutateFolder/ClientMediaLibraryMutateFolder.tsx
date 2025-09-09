import React, {useState} from 'react';
import {ClientMediaFolder} from "@client/mediaLibrary/types";

import Stack from "@mui/material/Stack";
import {Spinner} from "@client/ui/spinner/Spinner";
import sx from './sx'
import {
	useActionsClientMediaLibraryFolders
} from "@client/mediaLibrary/containers/folders/actions/useActionsClientMediaLibraryFolders";
import {SecondaryBtn} from "@client/ui/buttons/SecondaryBtn";
import {Input} from "@client/ui/inputs/Input";

export const ClientMediaLibraryMutateFolder = ({
												   parentId,
												   initial,
												   onSave,
											   }: {
	parentId: number | string
	onSave?: () => void
	initial?: ClientMediaFolder
}) => {
	
	const {
		createFolder,
		updateFolder,
		isPending
	} = useActionsClientMediaLibraryFolders(onSave)
	
	const [name, setName] = useState(initial?.name ?? '')
	
	const handleSave = async () => {
		if (initial?.id) {
			await updateFolder({
				id: initial.id,
				name,
				parent_id: parentId
			})
		} else {
			await createFolder({
				name,
				parent_id: parentId
			})
		}
	}
	
	return (
		<Stack
			sx={sx.root}
		>
			{isPending && <Spinner
                variant={'overlay'}
            />}
			
			<Input
				value={name}
				onChange={(e) => setName(e.target.value)}
				label={'Назва папки'}
				size={'small'}
			/>
			
			<SecondaryBtn
				onClick={handleSave}
				disabled={isPending}
			>
				Зберегти
			</SecondaryBtn>
		</Stack>
	);
};
