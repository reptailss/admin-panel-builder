import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Spinner} from "@client/ui/spinner/Spinner";
import {ClientValueBuilder} from '@client/valueBuilder/ClientValueBuilder';
import {AuthClientHelper} from "@client/auth/helper/AuthClientHelper";
import {useRequest} from "@client/requests/hooks/useRequest";
import {FieldsValidator} from "@fields/validator/FieldsValidator";
import {useShowErrors} from "@client/errors/useShowErrors";
import {IContentManager, IContentManagerAction, IContentManagerProvider} from "@contentManager/interfaces";
import {IField} from "@fields/interfaces/field";
import {ClientGuardActions} from "@client/helpers/ClientGuardActionsHelper";
import {useClientAccessContext} from "@client/access/context/useClientAccessContext";
import {NotAccessSimple} from "@client/access/notAccess/NotAccessSimple";
import {ClientContentActions} from "@client/content/ClientContentActions";

const fieldsValidator = new FieldsValidator()

export function ClientContent({
								  fieldKey,
								  fieldUrl,
								  locale,
								  field,
								  provider,
								  contentManager,
							  }: {
	field: IField<unknown>
	fieldKey: string
	fieldUrl: string
	locale: string | null
	provider: IContentManagerProvider
	contentManager: IContentManager
}) {
	const [value, setValue] = useState<unknown | null>(null);
	
	const showErrors = useShowErrors()
	
	const {
		onRequest,
		isLoading
	} = useRequest()
	
	const {roles} = useClientAccessContext()
	
	const actions = useMemo(() => {
		return contentManager.getActions()
	}, [contentManager])
	
	
	const guards: {
		read: boolean
		save: boolean
		delete: boolean
	} = useMemo(() => {
		const globalRoles = contentManager.getGlobalActionRoles()
		const rolesByTypes = contentManager.getActionsRolesByTypes()
		return {
			read: ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.read,
				userRoles: roles,
			}),
			save: ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.save,
				userRoles: roles,
			}),
			delete: ClientGuardActions.checkGuard({
				globalRoles,
				rolesByType: rolesByTypes.delete,
				userRoles: roles,
			}),
		}
	}, [contentManager, roles])
	
	const handleSave = useCallback(async (content: unknown) => {
		
		const {
			errors,
			error,
			data,
		} = fieldsValidator.validate(field, content, null, true)
		
		if (error) {
			showErrors(errors)
			return
		}
		await onRequest(async () => {
			await provider.saveContent({
				content: data,
				fieldKey,
				locale,
				fieldUrl,
				token: AuthClientHelper.getAccessToken()
			})
			setValue(data)
		})
	}, [provider, fieldUrl, fieldKey, locale])
	
	
	const onDeleteContent = useCallback(async () => {
		await onRequest(async () => {
			await provider.deleteContent({
				token: AuthClientHelper.getAccessToken(),
				fieldUrl,
				locale,
				fieldKey
			})
			setValue(null)
		})
	}, [provider, fieldUrl, fieldKey, locale])
	
	const onClickAction = useCallback(async (action: IContentManagerAction) => {
		await onRequest(async () => {
			await action.action({
				token: AuthClientHelper.getAccessToken(),
				fieldUrl,
				locale,
				fieldKey
			})
			const initialValue = await onRequest(async () => {
				return await provider.getInitialContent({
					token: AuthClientHelper.getAccessToken(),
					fieldUrl,
					locale,
					fieldKey,
				})
			})
			const res = fieldsValidator.validate(
				field,
				initialValue,
				null
			)
			setValue(res.data)
		})
	}, [locale,provider,fieldUrl,fieldKey])
	
	useEffect(() => {
		const fetchInitialContent = async () => {
			const initialValue = await onRequest(async () => {
				return await provider.getInitialContent({
					token: AuthClientHelper.getAccessToken(),
					fieldUrl,
					locale,
					fieldKey,
				})
			})
			const res = fieldsValidator.validate(
				field,
				initialValue,
				null
			)
			setValue(res.data)
		}
		fetchInitialContent()
	}, [provider, fieldUrl, fieldKey, locale]);
	
	
	if (isLoading) {
		return (
			<Spinner variant={'overlay'}/>
		)
	}
	
	if (!guards.read) {
		return (
			<NotAccessSimple/>
		)
	}
	
	return (
		<ClientValueBuilder
			field={field}
			initialValue={value}
			onSave={guards?.save ? handleSave : undefined}
			onDelete={guards?.delete ? onDeleteContent : undefined}
			actionsChildren={<ClientContentActions
				actions={actions}
				onClickAction={onClickAction}
			/>}
		/>
	);
}

