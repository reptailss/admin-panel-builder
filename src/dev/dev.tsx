import {App} from "../app/App";
import {adminPagesContentManager} from "./adminPagesContentManager";
import {ClientAppCreator} from "../app/ClientAppCreator";

export const APP_LOCALES = ['uk', 'en'] as const

export type AppLocales = typeof APP_LOCALES
export type AppLocale = AppLocales[number]

export const DEFAULT_APP_LOCALE: AppLocale = 'uk'

const app = new App()
	.setLocales(APP_LOCALES)
	.setDefaultLocale(DEFAULT_APP_LOCALE)
	.addContentManager(adminPagesContentManager)


new ClientAppCreator(
	document.getElementById('root'),
	app,
).init()

