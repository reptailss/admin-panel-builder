import React, {ReactNode, useMemo, useState} from 'react';
import {ClientAppContextValue} from "@client/app/context/index";
import {IApp} from "@app/interfaces";

export const ClientAppProvider = ({
									  children,
									  app
								  }: {
	children: ReactNode
	app: IApp
}) => {
	const [openMobileSidebar, setOpenMobileSidebar] = useState<boolean>(false)
	const [snackBar, setSnackBar] = useState<{
		open: boolean
		variant: 'success' | 'error' | 'warning' | 'info'
		message: string
	}>({
		open: false,
		message: '',
		variant: 'info'
	})
	const [targetLocale, setTargetLocale] = useState<string | null>(app.getDefaultLocale() || null)
	const authProvider = useMemo(() => {
		return app.getAuthProvider()
	}, [])
	
	const accessProvider = useMemo(() => {
		return app.getAccessProvider()
	}, [])
	
	const contentManagers = useMemo(() => {
		return app.getContentManagers()
	}, [])
	
	const postManagers = useMemo(() => {
		return app.getPostManagers()
	}, [])
	
	const multilanguagePostManagers = useMemo(() => {
		return app.getMultilanguagePostManagers()
	}, [])
	
	const accessManagers = useMemo(() => {
		return app.getAccessManagers()
	}, [])
	
	const formManagers = useMemo(() => {
		return app.getFormManagers()
	}, [])
	
	const locales: readonly string[] = useMemo(() => {
		return app.getLocales()
	}, [])
	
	return (
		<ClientAppContextValue.Provider
			value={{
				openMobileSidebar,
				setOpenMobileSidebar,
				authProvider,
				snackBar,
				setSnackBar,
				contentManagers,
				locales,
				targetLocale,
				setTargetLocale,
				postManagers,
				accessProvider,
				accessManagers,
				multilanguagePostManagers,
				formManagers
			}}
		>
			{children}
		</ClientAppContextValue.Provider>
	);
};

