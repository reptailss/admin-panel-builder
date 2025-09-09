import {IField} from "@fields/interfaces/field";
import {IAccessManager, IAccessManagerProvider} from "./interfaces";

type GetUserPreviewValueCb<UserInfo extends object, Field extends IField> = (userInfo: UserInfo) => Field['_value']

export class AccessManager<
	UserInfo extends object
> implements IAccessManager<UserInfo> {
	private userPreviewFields: {
		value: keyof UserInfo | GetUserPreviewValueCb<UserInfo, IField<any>>
		field: IField<UserInfo[keyof UserInfo]> | IField<any>
	} [] = []
	private actionsRoles: {
		read?: readonly string[]
		save?: readonly string[]
		delete?: readonly string[]
	} = {}
	private globalActionsRoles: readonly string[] = []
	private icon: string | null = null
	
	constructor(
		private readonly name: string,
		public readonly provider: IAccessManagerProvider<UserInfo>
	) {
	}
	
	
	public getName(): string {
		return this.name
	}
	
	
	public setIcon(icon: string): this {
		this.icon = icon
		return this
	}
	
	public getIcon(): string | null {
		return this.icon
	}
	
	public addUserPreviewField<Field extends IField>(value: GetUserPreviewValueCb<UserInfo, Field>, field: Field): this
	public addUserPreviewField<Value extends keyof UserInfo>(value: Value, field: IField<UserInfo[Value]>): this
	public addUserPreviewField(value: keyof UserInfo | GetUserPreviewValueCb<UserInfo, any>, field: IField<any>): this {
		this.userPreviewFields.push({
			value,
			field: field as unknown as IField<UserInfo[keyof UserInfo]>
		})
		return this
	}
	
	public getUserPreviewFields(): Array<{
		value: keyof UserInfo | GetUserPreviewValueCb<UserInfo, IField<any>>
		field: IField<UserInfo[keyof UserInfo]> | IField<any>
	}> {
		return this.userPreviewFields
	}
	
	public setGlobalActionRoles(roles: readonly string[]) {
		this.globalActionsRoles = roles
		return this
	}
	
	public getGlobalActionRoles(): readonly string[] {
		return this.globalActionsRoles
	}
	
	public setActionRolesByType(rolesByType: {
		read?: readonly string[]
		save?: readonly string[]
		delete?: readonly string[]
	}): this {
		if (rolesByType.read) {
			this.actionsRoles.read = rolesByType.read
		}
		if (rolesByType.save) {
			this.actionsRoles.save = rolesByType.save
		}
		if (rolesByType.delete) {
			this.actionsRoles.delete = rolesByType.delete
		}
		return this
	}
	
	public getActionsRolesByTypes(): {
		create?: readonly string[]
		update?: readonly string[]
		delete?: readonly string[]
	} {
		return this.actionsRoles
	}
}