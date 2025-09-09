import React from 'react';
import {ClientMediaFile} from "@client/mediaLibrary/types";
import {
	useActionsClientMediaLibraryFiles
} from "@client/mediaLibrary/containers/files/actions/useActionsClientMediaLibraryFiles";
import {Popover} from "@client/ui/popover/Popover";
import {MoreBtn} from "@client/ui/buttons/MoreBtn";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import sx from './sx'
import {PrimaryBtn} from "@client/ui/buttons/PrimaryBtn";
import {DeleteBtn} from "@client/ui/buttons/DeleteBtn";
import {useCheckCanSelectedFile} from "@client/mediaLibrary/containers/files/checkSelectedFile/useCheckCanSelectedFile";
import {useRootMediaLibraryContext} from "@client/mediaLibrary/context/hooks";

export const ClientMediaLibraryFileSideBar = ({file}: {
		file: ClientMediaFile,
	}) => {
		
		const {guards} = useRootMediaLibraryContext()
		const {
			deleteFile,
			selectFile,
			isPending
		} = useActionsClientMediaLibraryFiles()
		
		const canSelectedFile = useCheckCanSelectedFile(file)
		
		const onDelete = async () => {
			await deleteFile(file.id)
		}
		
		const onSelect = () => {
			selectFile(file)
		}
		
		
		return (
			<Popover
				button={<MoreBtn/>}
			>
				<Stack
					gap={1}
					sx={sx.root}
				>
					<Typography
						variant={'body2'}
					>
						Назва : {file.name}
					</Typography>
					
					<Divider/>
					
					<Typography
						variant={'body2'}
					>
						Посилання : {file.file}
					</Typography>
					
					<Divider/>
					
					{canSelectedFile && <PrimaryBtn
                        onClick={onSelect}
                        disabled={isPending}
                    >
                        Обрати
                    </PrimaryBtn>}
					
					{guards.deleteFile && <DeleteBtn
                        onClick={onDelete}
                        disabled={isPending}
                    >
                        Видалити
                    </DeleteBtn>}
					
				</Stack>
			</Popover>
		);
	}
;
