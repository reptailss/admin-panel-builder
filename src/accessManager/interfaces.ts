import {IField} from "@fields/interfaces/field";


type GetUserPreviewValueCb<UserInfo extends object, Field extends IField> = (userInfo: UserInfo) => Field['_value']

export interface IAccessManager<
	UserInfo extends object,
> {
	
	provider: IAccessManagerProvider<UserInfo>
	
	getName(): string
	
	setIcon(icon: string): this
	
	getIcon(): string | null
	
	addUserPreviewField<Value extends keyof UserInfo>(value: Value, field: IField<UserInfo[Value]>): this
	
	addUserPreviewField<Field extends IField>(value: GetUserPreviewValueCb<UserInfo, Field>, field: Field): this
	
	getUserPreviewFields(): Array<{
		value: keyof UserInfo | GetUserPreviewValueCb<UserInfo, IField<any>>
		field: IField<UserInfo[keyof UserInfo]> | IField<any>
	}>
	
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
	
}


export interface IAccessManagerProvider<
	UserInfo,
> {
	saveUserRoles(
		props: {
			roles: string[]
			token: string | null
			userInfo: UserInfo
		}
	): Promise<void>
	
	deleteUserRoles(
		props: {
			token: string | null
			userInfo: UserInfo
		}
	): Promise<void>
	
	getUserRoles(props: {
		userInfo: UserInfo
		token: string | null
	}): Promise<{
		roles: string[]
	}>
	
	getAllRoles(props: {
		token: string | null
	}): Promise<{
		roles: Array<string | {
			value: string
			label: string
		}>
	}>
	
	getUsers(props: {
		token: string | null
	}): Promise<UserInfo[]>
}