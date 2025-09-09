import {IMediaValueProvider} from "@fields/interfaces/mediaValueProvider";

export abstract class AbstractMediaValueProvider implements IMediaValueProvider{
	private globalActionsRoles: readonly string[] = []
	private actionsRoles: {
		createFolder?: readonly string[]
		updateFolder?: readonly string[]
		deleteFolder?: readonly string[]
		createFile?: readonly string[]
		deleteFile?: readonly string[]
	} = {}
	
	abstract createMediaFile(props: {
		file: File
		name: string
		folder_id: number | string
		token: string | null
	}): Promise<void>
	
	abstract deleteMediaFile(props: {
		id: number | string
		token: string | null
	}): Promise<void>
	
	abstract getAllMediaFiles(props: {
		token: string | null
	}): Promise<{
		name: string
		folder_id: number | string
		file: string
		id: number | string
		mimetype?: string | null
	}[]>
	
	abstract createMediaFolder(props: {
		name: string
		parent_id: string | number
		token: string | null
	}): Promise<void>
	
	abstract updateMediaFolder(props: {
		name: string
		parent_id: string | number
		id: number | string
		token: string | null
	}): Promise<void>
	
	abstract deleteMediaFolder(props: {
		id: number | string
		token: string | null
	}): Promise<void>
	
	abstract getAllMediaFolders(props: {
		token: string | null
	}): Promise<{
		name: string
		parent_id: number
		id: number | string
	}[]>
	
	public setGlobalActionRoles(roles: readonly string[]) {
		this.globalActionsRoles = roles
		return this
	}
	
	public setActionRolesByType(rolesByType: {
		createFolder?: readonly string[]
		updateFolder?: readonly string[]
		deleteFolder?: readonly string[]
		createFile?: readonly string[]
		deleteFile?: readonly string[]
	}): this {
		if (rolesByType.createFolder) {
			this.actionsRoles.createFolder = rolesByType.createFolder
		}
		if (rolesByType.updateFolder) {
			this.actionsRoles.updateFolder = rolesByType.updateFolder
		}
		if (rolesByType.deleteFolder) {
			this.actionsRoles.deleteFolder = rolesByType.deleteFolder
		}
		if (rolesByType.createFile) {
			this.actionsRoles.createFile = rolesByType.createFile
		}
		if (rolesByType.deleteFile) {
			this.actionsRoles.deleteFile = rolesByType.deleteFile
		}
		return this
	}
	
	public getActionsRolesByTypes(): {
		createFolder?: readonly string[]
		updateFolder?: readonly string[]
		deleteFolder?: readonly string[]
		createFile?: readonly string[]
		deleteFile?: readonly string[]
	} {
		return this.actionsRoles
	}
	
	public getGlobalActionRoles(): readonly string[] {
		return this.globalActionsRoles
	}
}