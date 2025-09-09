import {IAuth2FaProvider, IAuthProvider} from "@auth/interfaces";
import {IContentManager} from "@contentManager/interfaces";
import {IPostManager} from "@postManager/interfaces";
import {IAccessProvider} from "@access/interfaces";
import {IAccessManager} from "@accessManager/interfaces";
import {MultilanguagePostManager} from "@postManager/MultilanguagePostManager";
import {IFormManager} from "@formManager/interfaces";

export type AppClientContext = {
	authProvider: IAuthProvider | IAuth2FaProvider<any> | null
	accessProvider: IAccessProvider | null
	openMobileSidebar: boolean
	setOpenMobileSidebar: (value: boolean) => void
	snackBar: {
		open: boolean
		variant: 'success' | 'error' | 'warning' | 'info'
		message: string
	}
	setSnackBar: (value: {
		open: boolean
		variant: 'success' | 'error' | 'warning' | 'info'
		message: string
	}) => void
	contentManagers: Record<string, IContentManager>
	postManagers: Record<string, IPostManager<any, any>>
	formManagers: Record<string, IFormManager<any, any>>
	accessManagers: Record<string, IAccessManager<any>>
	multilanguagePostManagers: Record<string, MultilanguagePostManager<any, any, any>>
	locales: readonly string[]
	targetLocale: string | null
	setTargetLocale: (locale: string) => void
}