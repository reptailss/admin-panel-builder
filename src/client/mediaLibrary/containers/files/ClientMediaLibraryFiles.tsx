import React, {useMemo} from 'react';
import {useDataMediaLibraryContext, useRootMediaLibraryContext} from "@client/mediaLibrary/context/hooks";
import {ClientMediaLibraryFilesItem} from "@client/mediaLibrary/containers/files/item/ClientMediaLibraryFilesItem";

export const ClientMediaLibraryFiles = () => {
	
	const {folderId,} = useRootMediaLibraryContext()
	const {files} = useDataMediaLibraryContext()
	
	const targetFiles = useMemo(() => {
		if (!files?.length) {
			return []
		}
		return files.filter((file) => file.folder_id.toString() == folderId)
		
	}, [folderId, files])
	
	return targetFiles.map((file, i) => {
		return (
			<ClientMediaLibraryFilesItem
				file={file}
				key={file.id}
			/>
		)
	})
	
};
