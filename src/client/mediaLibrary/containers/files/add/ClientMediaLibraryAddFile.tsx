import React, {useState} from 'react';
import Stack from "@mui/material/Stack";
import {
	useActionsClientMediaLibraryFiles
} from "@client/mediaLibrary/containers/files/actions/useActionsClientMediaLibraryFiles";
import sx from './sx'
import {FileUploader} from "@client/ui/uploader/FileUploader";
import {SecondaryBtn} from "@client/ui/buttons/SecondaryBtn";

export const ClientMediaLibraryAddFile = ({
											  folderId,
											  onSave,
										  }: {
		folderId: number | string
		onSave?: () => void
	}) => {
		
		const [file, setFile] = useState<File | null>(null)
		
		const {
			createFile,
			isPending
		} = useActionsClientMediaLibraryFiles(onSave)
		
		const onAdd = async () => {
			if (!file) {
				return
			}
			await createFile({
				file,
				name: file?.name || '',
				folder_id: folderId
			})
		}
		
		
		return (
			<Stack
				sx={sx.root}
			>
				<FileUploader
					onChangeFile={setFile}
				/>
				
				<SecondaryBtn
					onClick={onAdd}
					disabled={isPending || !file}
				>
					Зберегти
				</SecondaryBtn>
			</Stack>
		);
	}
;

export default ClientMediaLibraryAddFile;
