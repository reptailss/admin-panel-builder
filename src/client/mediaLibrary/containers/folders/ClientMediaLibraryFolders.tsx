import React, {ReactNode} from 'react';
import {
	ClientMediaLibraryFoldersList
} from "@client/mediaLibrary/containers/folders/list/ClientMediaLibraryFoldersList";

export const ClientMediaLibraryFolders = ({
											  children
										  }: {
	children?: ReactNode
}) => {
	return (
		<ClientMediaLibraryFoldersList
			children={children}
		/>
	);
};
