import {IApp} from "@app/interfaces";
import {IAuth2FaProvider, IAuthProvider} from "@auth/interfaces";
import {IContentManager} from "@contentManager/interfaces";
import {IPostManager} from "@postManager/interfaces";
import {IAccessProvider} from "@access/interfaces";
import {IAccessManager} from "@accessManager/interfaces";
import {MultilanguagePostManager} from "@postManager/MultilanguagePostManager";
import {IFormManager} from "@formManager/interfaces";

export class App implements IApp {
	
	private authProvider: IAuthProvider | IAuth2FaProvider<any> | null = null
	private accessProvider: IAccessProvider | null = null
	private contentManagers: Record<string, IContentManager> = {}
	private postManagers: Record<string, IPostManager<any, any>> = {}
	private multilanguagePostManagers: Record<string, MultilanguagePostManager<any, any, any, any>> = {}
	private accessManagers: Record<string, IAccessManager<any>> = {}
	private formManagers: Record<string, IFormManager<any, any>> = {}
	private locales: readonly string[] = []
	private defaultLocale: Readonly<string> | null = null
	
	public setAuthProvider(authProvider: IAuthProvider | IAuth2FaProvider<any>): this {
		this.authProvider = authProvider
		return this
	}
	
	public getAuthProvider(): IAuthProvider | null {
		return this.authProvider
	}
	
	public setAccessProvider(accessProvider: IAccessProvider): this {
		this.accessProvider = accessProvider
		return this
	}
	
	public getAccessProvider(): IAccessProvider | null {
		return this.accessProvider
	}
	
	public addContentManager(
		contentManager: IContentManager
	): this {
		this.contentManagers[contentManager.getName()] = contentManager
		return this
	}
	
	public getContentManagers(): Record<string, IContentManager> {
		return this.contentManagers
	}
	
	public addPostManager<Post extends object, CreatePost extends object>(
		postManager: IPostManager<Post, CreatePost>
	): this {
		this.postManagers[postManager.getName()] = postManager as IPostManager<Post, CreatePost>
		return this
	}
	
	public getPostManagers(): Record<string, IPostManager<any, any>> {
		return this.postManagers
	}
	
	public addMultilanguagePostManager<
		Post extends object,
		BaseField extends object,
		MultilanguageField extends object,
		Locales extends readonly string[] = string[]
	>(
		postManager: MultilanguagePostManager<
			Post,
			BaseField,
			MultilanguageField,
			Locales
		>
	): this {
		this.multilanguagePostManagers[postManager.getName()] = postManager as MultilanguagePostManager<
			Post,
			BaseField,
			MultilanguageField,
			Locales
		>
		return this
	}
	
	public getMultilanguagePostManagers(): Record<string, MultilanguagePostManager<any, any, any>> {
		return this.multilanguagePostManagers
	}
	
	public addFormManager<Form extends object, UpdateForm extends object>(
		formManager: IFormManager<Form, UpdateForm>
	): this {
		this.formManagers[formManager.getName()] = formManager as IFormManager<Form, UpdateForm>
		return this
	}
	
	public getFormManagers(): Record<string, IFormManager<any, any>> {
		return this.formManagers
	}
	
	public addAccessManager<UserInfo extends object>(
		accessManager: IAccessManager<UserInfo>
	): this {
		this.accessManagers[accessManager.getName()] = accessManager as IAccessManager<UserInfo>
		return this
	}
	
	public getAccessManagers(): Record<string, IAccessManager<any>> {
		return this.accessManagers
	}
	
	public setLocales(locales: readonly string[]): this {
		this.locales = locales
		return this
	}
	
	public getLocales(): readonly string[] {
		return this.locales
	}
	
	public setDefaultLocale(defaultLocale: string): this {
		this.defaultLocale = defaultLocale
		return this
	}
	
	public getDefaultLocale(): string | null {
		return this.defaultLocale
	}
	
}