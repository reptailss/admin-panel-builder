import {
	IContentManager,
	IContentManagerAction,
	IContentManagerField,
	IContentManagerProvider
} from "@contentManager/interfaces";
import {IField} from "@fields/interfaces/field";

export class ContentManager implements IContentManager {
	private contentManagerFields: Record<string, IContentManagerField<object>> = {}
	private actionsRoles: {
		read?: readonly string[]
		save?: readonly string[]
		delete?: readonly string[]
	} = {}
	private globalActionsRoles: readonly string[] = []
	private actions: IContentManagerAction[] = []
	
	constructor(private readonly name: string, public provider: IContentManagerProvider) {
	}
	
	public addField<Value extends object>(
		field: IContentManagerField<Value>
	): this {
		//@ts-ignore
		this.contentManagerFields[field.getFieldUrl()] = field;
		return this
	}
	
	public getField<Value extends object>(fieldUrl: string): IField<Value> {
		//@ts-ignore
		return this.contentManagerFields[fieldUrl].getField() as IField<Value>
	}
	
	public getFieldsInfo(): {
		fieldUrl: string
		name: string | null
		icon: string | null
	}[] {
		const res: {
			fieldUrl: string
			name: string | null
			icon: string | null
		}[] = []
		for (const fieldUrl in this.contentManagerFields) {
			const field = this.contentManagerFields[fieldUrl];
			res.push({
				fieldUrl: field.getFieldUrl(),
				name: field.getName(),
				icon: field.getIcon(),
			})
		}
		return res
	}
	
	public getName(): string {
		return this.name
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
		read?: readonly string[]
		save?: readonly string[]
		delete?: readonly string[]
	} {
		return this.actionsRoles
	}
	
	public setGlobalActionRoles(roles: readonly string[]) {
		this.globalActionsRoles = roles
		return this
	}
	
	public getGlobalActionRoles(): readonly string[] {
		return this.globalActionsRoles
	}
	
	public addAction(action: IContentManagerAction): this {
		this.actions.push(action)
		return this
	}
	
	public getActions(): IContentManagerAction[] {
		return this.actions
	}
}