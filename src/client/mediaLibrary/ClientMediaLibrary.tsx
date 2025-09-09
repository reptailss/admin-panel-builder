import React, {memo} from 'react';
import {OnSelectMediaLibraryFile} from "@client/mediaLibrary/types/events";
import {IMediaValueProvider} from "@fields/interfaces/mediaValueProvider";
import {DataClientMediaLibraryProvider} from "@client/mediaLibrary/context/providers/DataClientMediaLibraryProvider";
import {RootClientMediaLibraryProvider} from "@client/mediaLibrary/context/providers/RootClientMediaLibraryProvider";
import {WorkspaceClientMediaLibrary} from "@client/mediaLibrary/workspace/WorkspaceClientMediaLibrary";


export const ClientMediaLibrary = memo(({
											onSelectFile,
											initialSelectedFile,
											provider,
											mediaType,
											globalRoles,
											rolesByTypes,
										}: {
	onSelectFile: OnSelectMediaLibraryFile
	initialSelectedFile: string | null
	provider: IMediaValueProvider
	mediaType: 'image' | 'video' | null
	globalRoles: readonly string[]
	rolesByTypes: {
		createFolder?: readonly string[]
		updateFolder?: readonly string[]
		deleteFolder?: readonly string[]
		createFile?: readonly string[]
		deleteFile?: readonly string[]
	}
}) => {
	return (
		<RootClientMediaLibraryProvider
			onSelectFile={onSelectFile}
			initialSelectedFile={initialSelectedFile}
			provider={provider}
			mediaType={mediaType}
			globalRoles={globalRoles}
			rolesByTypes={rolesByTypes}
		>
			<DataClientMediaLibraryProvider>
				<WorkspaceClientMediaLibrary/>
			</DataClientMediaLibraryProvider>
		</RootClientMediaLibraryProvider>
	);
});
