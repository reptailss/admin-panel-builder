import React, {ReactNode, useEffect, useMemo} from 'react';
import {DataClientMediaLibraryContextValue} from "@client/mediaLibrary/context/providers/index";

import {
	MediaLibraryTreeFoldersBuilder
} from "@client/mediaLibrary/containers/folders/treeBuilder/MediaLibraryTreeFoldersBuilder";
import {TreeClientMediaFolder} from "@client/mediaLibrary/containers/folders/types";
import {useRootMediaLibraryContext} from "@client/mediaLibrary/context/hooks";
import {
	useFetchClientMediaLibraryFolders
} from "@client/mediaLibrary/containers/folders/queryHooks/useFetchClientMediaLibraryFolders";
import {
	useFetchClientMediaLibraryFiles
} from '@client/mediaLibrary/containers/files/queryHooks/useFetchClientMediaLibraryFiles';
import {CLIENT_MEDIA_HOME_FOLDER} from "@client/mediaLibrary/constants/rootFolder";


export const DataClientMediaLibraryProvider = ({
												   children,
											   }: {
	children: ReactNode
}) => {
	
	const {
		provider,
		folderId,
	} = useRootMediaLibraryContext()
	
	const {
		files,
		fetchFiles
	} = useFetchClientMediaLibraryFiles(provider)
	
	const {
		folders,
		fetchFolders
	} = useFetchClientMediaLibraryFolders(provider)
	
	const treeFolders = useMemo(() => {
		return MediaLibraryTreeFoldersBuilder.buildTree(folders)
	}, [folders])
	
	const targetFolders = useMemo(() => {
		if (folderId.toString() === '0') {
			return {
				tree: {
					...CLIENT_MEDIA_HOME_FOLDER,
					childs: treeFolders
				},
				breadcrumbs: []
			}
		}
		return MediaLibraryTreeFoldersBuilder.buildTargetFoldersTreeAndBreadcrumbs(treeFolders, folderId)
	}, [folderId, treeFolders])
	
	useEffect(() => {
		const init = async () => {
			await fetchFolders()
			await fetchFiles()
		}
		init()
	}, [])
	
	return (
		<DataClientMediaLibraryContextValue.Provider
			value={{
				currentFolder: targetFolders.tree as TreeClientMediaFolder,
				breadcrumbs: targetFolders.breadcrumbs,
				refetchFiles: fetchFiles,
				refetchFolders: fetchFolders,
				treeFolders,
				files,
			}}
		>
			{children}
		</DataClientMediaLibraryContextValue.Provider>
	)
};
