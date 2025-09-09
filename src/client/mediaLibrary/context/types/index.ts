import {OnSelectMediaLibraryFile} from "@client/mediaLibrary/types/events";
import {IMediaValueProvider} from "@fields/interfaces/mediaValueProvider";
import {ClientMediaFile, ClientMediaFolder} from "@client/mediaLibrary/types";
import {TreeClientMediaFolder} from "@client/mediaLibrary/containers/folders/types";


export interface RootClientMediaLibraryContext {
	folderId: string
	setFolderId: (value: string) => void
	forwardFolderId: string
	setForwardFolderId: (value: string) => void
	onSelectFile: OnSelectMediaLibraryFile
	provider: IMediaValueProvider
	mediaType: 'image' | 'video' | null
	guards: {
		createFolder: boolean
		updateFolder: boolean
		deleteFolder: boolean
		createFile: boolean
		deleteFile: boolean
	}
}


export interface DataClientMediaLibraryContext {
	treeFolders: TreeClientMediaFolder[]
	currentFolder: TreeClientMediaFolder
	breadcrumbs: ClientMediaFolder[]
	files: ClientMediaFile[]
	refetchFolders: () => Promise<void>
	refetchFiles: () => Promise<void>
}