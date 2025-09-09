import {IField} from "@fields/interfaces/field";
import {IFormManager, IFormManagerProvider} from "@formManager/interfaces";

type GetCardPreviewValueCb<Post extends object, Field extends IField> = (post: Post) => Field['_value']

export class FormManager<
	Form extends object,
	UpdateForm extends object
> implements IFormManager<Form, UpdateForm> {
	private icon: string | null = null
	private cardPreviewFields: {
		value: keyof Form | GetCardPreviewValueCb<Form, IField<any>>
		field: IField<Form[keyof Form]>
	} [] = []
	private actionsRoles: {
		read?: readonly string[]
		update?: readonly string[]
		delete?: readonly string[]
	} = {}
	private globalActionsRoles: readonly string[] = []
	
	constructor(
		private readonly name: string,
		public readonly updateField: IField<UpdateForm>,
		public readonly provider: IFormManagerProvider<Form, UpdateForm>
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
	
	public addCardPreviewField<Field extends IField>(value: GetCardPreviewValueCb<Form, Field>, field: Field): this
	public addCardPreviewField<Value extends keyof Form>(value: Value, field: IField<Form[Value]>): this
	public addCardPreviewField(value: keyof Form | GetCardPreviewValueCb<Form, any>, field: IField<any>): this {
		this.cardPreviewFields.push({
			value,
			field: field as unknown as IField<Form[keyof Form]>
		})
		return this
	}
	
	public getCardPreviewFields(): Array<{
		value: keyof Form | GetCardPreviewValueCb<Form, IField<any>>
		field: IField<Form[keyof Form]>
	}> {
		return this.cardPreviewFields
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
		update?: readonly string[]
		delete?: readonly string[]
	}): this {
		if (rolesByType.read) {
			this.actionsRoles.read = rolesByType.read
		}
		if (rolesByType.update) {
			this.actionsRoles.update = rolesByType.update
		}
		if (rolesByType.delete) {
			this.actionsRoles.delete = rolesByType.delete
		}
		return this
	}
	
	public getActionsRolesByTypes(): {
		read?: readonly string[]
		create?: readonly string[]
		update?: readonly string[]
		delete?: readonly string[]
	} {
		return this.actionsRoles
	}
}