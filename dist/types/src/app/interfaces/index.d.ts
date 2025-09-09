import { IAuth2FaProvider, IAuthProvider } from "../../auth/interfaces";
import { IContentManager } from "../../contentManager/interfaces";
import { IPostManager } from "../../postManager/interfaces";
import { IAccessManager } from "../../accessManager/interfaces";
import { IAccessProvider } from "../../access/interfaces";
import { MultilanguagePostManager } from "../../postManager/MultilanguagePostManager";
import { IFormManager } from "../../formManager/interfaces";
export interface IApp {
    setAuthProvider(authProvider: IAuthProvider | IAuth2FaProvider<any>): this;
    getAuthProvider(): IAuthProvider | IAuth2FaProvider<any> | null;
    setAccessProvider(accessProvider: IAccessProvider | IAuth2FaProvider<any>): this;
    getAccessProvider(): IAccessProvider | null;
    addContentManager(contentManager: IContentManager): this;
    getContentManagers(): Record<string, IContentManager>;
    addPostManager<Post extends object, CreatePost extends object>(postManager: IPostManager<Post, CreatePost>): this;
    getPostManagers(): Record<string, IPostManager<any, any>>;
    addMultilanguagePostManager<Post extends object, BaseField extends object, MultilanguageField extends object, Locales extends readonly string[] = string[]>(postManager: MultilanguagePostManager<Post, BaseField, MultilanguageField, Locales>): this;
    addFormManager<Form extends object, UpdateForm extends object>(formManager: IFormManager<Form, UpdateForm>): this;
    getFormManagers(): Record<string, IFormManager<any, any>>;
    getMultilanguagePostManagers(): Record<string, MultilanguagePostManager<any, any, any>>;
    addAccessManager<UserInfo extends object>(accessManager: IAccessManager<UserInfo>): this;
    getAccessManagers(): Record<string, IAccessManager<any>>;
    setLocales(locales: readonly string[]): this;
    getLocales(): readonly string[];
    setDefaultLocale(defaultLocale: Readonly<string>): this;
    getDefaultLocale(): Readonly<string> | null;
}
