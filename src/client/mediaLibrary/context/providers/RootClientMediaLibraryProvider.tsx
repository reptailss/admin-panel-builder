import React, {ReactNode, useMemo, useState} from 'react';
import {OnSelectMediaLibraryFile} from "@client/mediaLibrary/types/events";
import {IMediaValueProvider} from "@fields/interfaces/mediaValueProvider";
import {RootClientMediaLibraryContextValue} from "@client/mediaLibrary/context/providers/index";
import {ClientGuardActions} from "@client/helpers/ClientGuardActionsHelper";
import {useClientAccessContext} from "@client/access/context/useClientAccessContext";


export const RootClientMediaLibraryProvider = ({
												   onSelectFile,
												   initialSelectedFile,
												   provider,
												   children,
												   mediaType,
												   globalRoles,
												   rolesByTypes,
											   }: {
	onSelectFile: OnSelectMediaLibraryFile
	initialSelectedFile: string | null
	provider: IMediaValueProvider
	children: ReactNode
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
	
	const [folderId, setFolderId] = useState<string>('0')
	const [forwardFolderId, setForwardFolderId] = useState<string>('0')
	const {roles} = useClientAccessContext()
	
	const guards: {
		createFolder: boolean
		updateFolder: boolean
		deleteFolder: boolean
		createFile: boolean
		deleteFile: boolean
	} = useMemo(() => {
		return {
			createFolder: ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.createFolder,
				userRoles: roles,
			}),
			updateFolder: ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.updateFolder,
				userRoles: roles,
			}),
			deleteFolder: ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.deleteFolder,
				userRoles: roles,
			}),
			createFile: ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.createFile,
				userRoles: roles,
			}),
			deleteFile: ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.deleteFile,
				userRoles: roles,
			}),
		}
	}, [globalRoles, rolesByTypes, roles])
	
	return (
		<RootClientMediaLibraryContextValue.Provider
			value={{
				folderId,
				setFolderId,
				forwardFolderId,
				setForwardFolderId,
				provider,
				onSelectFile,
				mediaType,
				guards,
			}}
		>
			{children}
		</RootClientMediaLibraryContextValue.Provider>
	)
};