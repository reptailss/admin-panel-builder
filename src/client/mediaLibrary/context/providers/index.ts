import {createContext} from "react";
import {DataClientMediaLibraryContext, RootClientMediaLibraryContext} from "@client/mediaLibrary/context/types";
import {CLIENT_MEDIA_HOME_FOLDER} from "@client/mediaLibrary/constants/rootFolder";
import {IMediaValueProvider} from "@fields/interfaces/mediaValueProvider";

export const RootClientMediaLibraryContextValue = createContext<RootClientMediaLibraryContext>({
	folderId: '0',
	setFolderId: () => {
	},
	forwardFolderId: '0',
	setForwardFolderId: () => {
	},
	onSelectFile: () => {
	},
	provider: null as unknown as IMediaValueProvider,
	mediaType:null,
	guards: {
		createFolder: true,
		updateFolder: true,
		deleteFolder: true,
		createFile: true,
		deleteFile: true,
	}
})

export const DataClientMediaLibraryContextValue = createContext<DataClientMediaLibraryContext>({
	currentFolder: CLIENT_MEDIA_HOME_FOLDER,
	treeFolders:[],
	breadcrumbs: [],
	files:[],
	refetchFiles: async () => {
	},
	refetchFolders: async () => {
	},
})