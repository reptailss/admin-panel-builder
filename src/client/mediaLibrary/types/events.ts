import {ClientMediaFile} from "@client/mediaLibrary/types/index";

export type OnSelectMediaLibraryFile = (
	filePath: string,
	clientMediaFile: ClientMediaFile
) => void