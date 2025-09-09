import {IField} from "@fields/interfaces/field";
import {IMultilanguagePostManager, IMultilanguagePostManagerProvider} from "@postManager/interfaces";

type GetCardPreviewImageCb<Post extends object> = (post: Post) => string
type GetCardPreviewValueCb<Post extends object, Field extends IField> = (post: Post) => Field['_value']

export class MultilanguagePostManager<
	Post extends object,
	BaseField extends object,
	MultilanguageField extends object,
	Locales extends readonly string[] = string[]
> implements IMultilanguagePostManager<Post, BaseField, MultilanguageField, Locales> {
	public readonly baseField: IField<BaseField>
	public readonly multilanguageField: IField<MultilanguageField>
	public readonly provider: IMultilanguagePostManagerProvider<
		Post,
		BaseField,
		MultilanguageField,
		Locales
	>
	
	private icon: string | null = null
	private readonly name: string
	private cardPreviewFields: {
		value: keyof Post | GetCardPreviewValueCb<Post, IField<any>>
		field: IField<Post[keyof Post]>
	} [] = []
	private cardPreviewImage: keyof Post | GetCardPreviewImageCb<Post> | null = null
	private actionsRoles: {
		read?: readonly string[]
		create?: readonly string[]
		update?: readonly string[]
		delete?: readonly string[]
	} = {}
	private globalActionsRoles: readonly string[] = []
	private locales: Locales | null = null
	
	constructor(
		{
			name,
			baseField,
			provider,
			multilanguageField,
			locales
		}: {
			name: string
			baseField: IField<BaseField>
			multilanguageField: IField<MultilanguageField>
			provider: IMultilanguagePostManagerProvider<
				Post,
				BaseField,
				MultilanguageField,
				Locales
			>,
			locales?: Locales
		}
	) {
		this.name = name
		this.baseField = baseField
		this.multilanguageField = multilanguageField
		this.provider = provider
		if (locales) {
			this.locales = locales
		}
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
	
	public addCardPreviewField<Field extends IField>(value: GetCardPreviewValueCb<Post, Field>, field: Field): this
	public addCardPreviewField<Value extends keyof Post>(value: Value, field: IField<Post[Value]>): this
	public addCardPreviewField(value: keyof Post | GetCardPreviewValueCb<Post, any>, field: IField<any>): this {
		this.cardPreviewFields.push({
			value,
			field: field as unknown as IField<Post[keyof Post]>
		})
		return this
	}
	
	public getCardPreviewFields(): Array<{
		value: keyof Post | GetCardPreviewValueCb<Post, IField<any>>
		field: IField<Post[keyof Post]>
	}> {
		return this.cardPreviewFields
	}
	
	public setCardPreviewImage(value: keyof Post | GetCardPreviewImageCb<Post>): this {
		this.cardPreviewImage = value
		return this
	}
	
	
	public getCardPreviewImage(): (keyof Post) | GetCardPreviewImageCb<Post> | null {
		return this.cardPreviewImage
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
		create?: readonly string[]
		update?: readonly string[]
		delete?: readonly string[]
	}): this {
		if (rolesByType.read) {
			this.actionsRoles.read = rolesByType.read
		}
		if (rolesByType.create) {
			this.actionsRoles.create = rolesByType.create
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
	
	public getLocales(): Locales | null {
		return this.locales
	}
}