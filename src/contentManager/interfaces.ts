import {IField} from "@fields/interfaces/field";

export interface IContentManager {
	
	provider: IContentManagerProvider
	
	addField<Value extends object>(field: IContentManagerField<Value>): this
	
	getField<Value extends object>(fieldUrl: string): IField<Value>
	
	getFieldsInfo(): {
		fieldUrl: string
		name: string | null
		icon: string | null
	}[]
	
	getName(): string
	
	setGlobalActionRoles(roles: readonly string[]): this
	
	setActionRolesByType(rolesByType: {
		read?: readonly string[]
		save?: readonly string[]
		delete?: readonly string[]
	}): this
	
	getActionsRolesByTypes(): {
		read?: readonly string[]
		save?: readonly string[]
		delete?: readonly string[]
	}
	
	getGlobalActionRoles(): readonly string[]
	
	addAction(action: IContentManagerAction): this
	
	getActions(): IContentManagerAction[]
}


export interface IContentManagerAction {
	
	getName(): string
	
	action(props: {
		fieldUrl: string
		fieldKey: string
		locale: string | null
		token: string | null
	}): Promise<void>
}

export interface IContentManagerProvider {
	saveContent<Value>(
		props: {
			fieldUrl: string
			fieldKey: string
			content: Value
			locale: string | null
			token: string | null
		}
	): Promise<void>
	
	deleteContent(props: {
		fieldUrl: string
		fieldKey: string
		locale: string | null
		token: string | null
	}): Promise<void>
	
	getInitialContent<Value extends { [key: string]: unknown }>(
		props: {
			fieldUrl: string
			fieldKey: string
			locale: string | null
			token: string | null
		}
	): Promise<Value | null>
	
}


export interface IContentManagerField<Value extends object> {
	getField(): IField<Value>
	
	getFieldUrl(): string
	
	setName(name: string): this
	
	getName(): string | null
	
	setIcon(name: string): this
	
	getIcon(): string | null
}
