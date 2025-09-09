import {ClientMediaFile} from "@client/mediaLibrary/types";
import {useMemo} from "react";
import {useRootMediaLibraryContext} from "@client/mediaLibrary/context/hooks";

export function useCheckCanSelectedFile(file: ClientMediaFile): boolean {
	const rootClientMediaLibraryContext = useRootMediaLibraryContext()
	return useMemo(() => {
		if (!rootClientMediaLibraryContext.mediaType) {
			return true
		}
		if(!file.mimetype){
			return  false
		}
		return file.mimetype.startsWith(rootClientMediaLibraryContext.mediaType)
	}, [file, rootClientMediaLibraryContext.mediaType])
}