import React, {useCallback, useMemo} from 'react'
import {NavigateList} from "@client/navigate/NavigateList";
import {useMediaView} from "@client/hooks/ui/useMediaView";
import {useClientAppContext} from "@client/app/context/useClientAppContext";
import {ClientNavigateItem} from "@client/navigate/types";
import {IField} from "@fields/interfaces/field";
import {PathsHelper} from "@client/paths/PathsHelper";
import {ClientFieldUrlReplacer} from "@client/helpers/ClientFieldUrlReplacer";
import {FieldsMatcher} from "@fields/helper/FieldsMatcher";
import {Icon} from "@iconify/react";
import {ClientGuardActions} from "@client/helpers/ClientGuardActionsHelper";
import {useClientAccessContext} from "@client/access/context/useClientAccessContext";

export const ClientNavigate = () => {
	
	const {isDesktop} = useMediaView()
	const appClientContext = useClientAppContext()
	const {roles} = useClientAccessContext()
	const hideMobileSidebar = useCallback(() => {
		appClientContext.setOpenMobileSidebar(false)
	}, [])
	
	const navigationList: ClientNavigateItem[] = useMemo(() => {
		const res: ClientNavigateItem[] = []
		for (const contentManagerName in appClientContext.contentManagers) {
			const contentManager = appClientContext.contentManagers[contentManagerName]
			const globalRoles = contentManager.getGlobalActionRoles()
			const rolesByTypes = contentManager.getActionsRolesByTypes()
			const read = ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.read,
				userRoles: roles,
			})
			if (!read) {
				continue
			}
			for (const fieldInfo of contentManager.getFieldsInfo()) {
				const children: ClientNavigateItem[] = []
				const field = contentManager.getField(fieldInfo.fieldUrl)
				const isObject = FieldsMatcher.isObject(field)
				if (!isObject) {
					throw new Error('Field mast be object')
				}
				const shape = field.getShape()
				for (const key in shape) {
					const field: IField = shape[key]
					const icon = field.getIcon()
					children.push({
						title: field.getName() || key,
						icon: icon ? <Icon
							icon={icon}
							style={{
								fontSize: '24px'
							}}
						/> : undefined,
						children: [],
						path: `${PathsHelper.getBasePath()}content/${contentManagerName}/${ClientFieldUrlReplacer.fieldUrlToPageUrl(fieldInfo.fieldUrl)}/${key}`
					})
				}
				res.push({
					children,
					title: fieldInfo.name || fieldInfo.fieldUrl,
					icon: fieldInfo.icon ? <Icon
						icon={fieldInfo.icon}
						style={{
							fontSize: '24px'
						}}
					/> : undefined,
					path: null
				})
			}
		}
		for (const postManagerName in appClientContext.postManagers) {
			const postManager = appClientContext.postManagers[postManagerName]
			const globalRoles = postManager.getGlobalActionRoles()
			const rolesByTypes = postManager.getActionsRolesByTypes()
			const read = ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.read,
				userRoles: roles,
			})
			if (!read) {
				continue
			}
			const icon = postManager.getIcon()
			res.push({
				children: [],
				title: postManager.getName(),
				icon: <Icon
					style={{
						fontSize: '24px'
					}}
					icon={icon || 'material-symbols-light:post-add'}
				/>,
				path: `${PathsHelper.getBasePath()}posts/${postManager.getName()}`
			})
		}
		
		for (const postManagerName in appClientContext.multilanguagePostManagers) {
			const postManager = appClientContext.multilanguagePostManagers[postManagerName]
			const globalRoles = postManager.getGlobalActionRoles()
			const rolesByTypes = postManager.getActionsRolesByTypes()
			const read = ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.read,
				userRoles: roles,
			})
			if (!read) {
				continue
			}
			const icon = postManager.getIcon()
			res.push({
				children: [],
				title: postManager.getName(),
				icon: <Icon
					style={{
						fontSize: '24px'
					}}
					icon={icon || 'material-symbols-light:post-add'}
				/>,
				path: `${PathsHelper.getBasePath()}multilanguage-posts/${postManager.getName()}`
			})
		}
		
		for (const accessManagerName in appClientContext.accessManagers) {
			const accessManager = appClientContext.accessManagers[accessManagerName]
			const globalRoles = accessManager.getGlobalActionRoles()
			const rolesByTypes = accessManager.getActionsRolesByTypes()
			const read = ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.read,
				userRoles: roles,
			})
			if (!read) {
				continue
			}
			const icon = accessManager.getIcon()
			res.push({
				children: [],
				title: accessManager.getName(),
				icon: <Icon
					style={{
						fontSize: '24px'
					}}
					icon={icon || 'uil:lock-access'}
				/>,
				path: `${PathsHelper.getBasePath()}access/${accessManager.getName()}`
			})
		}
		
		for (const formManagerName in appClientContext.formManagers) {
			const formManager = appClientContext.formManagers[formManagerName]
			const globalRoles = formManager.getGlobalActionRoles()
			const rolesByTypes = formManager.getActionsRolesByTypes()
			const read = ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.read,
				userRoles: roles,
			})
			if (!read) {
				continue
			}
			const icon = formManager.getIcon()
			res.push({
				children: [],
				title: formManager.getName(),
				icon: <Icon
					style={{
						fontSize: '24px'
					}}
					icon={icon || 'streamline-freehand:form-edition-clipboard'}
				/>,
				path: `${PathsHelper.getBasePath()}forms/${formManager.getName()}`
			})
		}
		return res
	}, [appClientContext, roles])
	
	return (
		<NavigateList
			navigationList={navigationList}
			onClick={!isDesktop ? hideMobileSidebar : undefined}
		/>
	)
}
