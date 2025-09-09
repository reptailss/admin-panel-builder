import React from 'react';
import {ClientMediaLibraryBreadcrumbs} from "@client/mediaLibrary/view/breadcrumbs/ClientMediaLibraryBreadcrumbs";
import {Stack} from "@mui/material";
import {useRootMediaLibraryContext} from "@client/mediaLibrary/context/hooks";
import sx from './sx'
import {
	ClientMediaLibraryMutateFolderModal
} from "@client/mediaLibrary/containers/folders/mutateFolder/ClientMediaLibraryMutateFolderModal";
import {ClientMediaLibraryAddFileModal} from "@client/mediaLibrary/containers/files/add/ClientMediaLibraryAddFileModal";

export const ClientMediaLibrarySidebar = () => {
	
	const {folderId, guards} = useRootMediaLibraryContext()
	
	return (
		<Stack
			direction={'row'}
			justifyContent={'space-between'}
			alignItems={'center'}
			flexWrap={'wrap'}
			gap={1}
			sx={sx.root}
		>
			<ClientMediaLibraryBreadcrumbs/>
			
			<Stack
				direction={'row'}
				flexWrap={'wrap'}
				gap={'10px'}
			>
				
				
				{guards.createFolder && <ClientMediaLibraryMutateFolderModal
                    parentId={folderId}
                />}
				
				{guards.createFile && <ClientMediaLibraryAddFileModal
                    folderId={folderId}
                />}
			</Stack>
		</Stack>
	);
};
