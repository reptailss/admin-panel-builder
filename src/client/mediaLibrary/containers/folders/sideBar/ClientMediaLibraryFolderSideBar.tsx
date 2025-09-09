import React from 'react';
import {ClientMediaFolder} from "@client/mediaLibrary/types";
import {Popover} from "@client/ui/popover/Popover";

import {
	ClientMediaLibraryMutateFolderModal
} from "@client/mediaLibrary/containers/folders/mutateFolder/ClientMediaLibraryMutateFolderModal";
import {
	useActionsClientMediaLibraryFolders
} from "@client/mediaLibrary/containers/folders/actions/useActionsClientMediaLibraryFolders";
import {MoreBtn} from "@client/ui/buttons/MoreBtn";
import Stack from "@mui/material/Stack";
import sx from './sx'
import {DeleteBtn} from "@client/ui/buttons/DeleteBtn";
import {useRootMediaLibraryContext} from "@client/mediaLibrary/context/hooks";

export const ClientMediaLibraryFolderSideBar = ({parentId, initial, id}: {
		parentId: number | string
		initial: ClientMediaFolder
		id: number | string
	}) => {
		
		const {guards} = useRootMediaLibraryContext()
		
		const {
			deleteFolder,
			isPending
		} = useActionsClientMediaLibraryFolders()
		
		const onDelete = async () => {
			await deleteFolder(id)
		}
		
		return (
			<Popover
				button={<MoreBtn/>}
			>
				<Stack
					gap={1}
					sx={sx.root}
				>
					
					{guards.updateFolder && <ClientMediaLibraryMutateFolderModal
                        parentId={parentId}
                        initial={initial}
                    />}
					
					{
						guards.deleteFolder && <DeleteBtn
                            onClick={onDelete}
                            disabled={isPending}
                        >
                            Видалити
                        </DeleteBtn>
					}
				</Stack>
			</Popover>
		);
	}
;
