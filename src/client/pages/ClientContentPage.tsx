import React, {useMemo} from 'react';
import {ClientContent} from '@client/content/ClientContent';
import {PageLayoutView} from "@client/layouts/pageLayout/PageLayoutView";
import {useParams} from "react-router-dom";
import {useClientAppContext} from "@client/app/context/useClientAppContext";
import {ClientFieldUrlReplacer} from "@client/helpers/ClientFieldUrlReplacer";
import {FieldsMatcher} from "@fields/helper/FieldsMatcher";
import {PageInfo} from "@client/ui/pageInfo/PageInfo";

export const ClientContentPage = () => {
	
	const {
		page,
		key,
		contentManagerName,
	} = useParams()
	
	const clientAppContext = useClientAppContext()
	const contentManager = useMemo(() => {
		return clientAppContext.contentManagers[contentManagerName || '']
	}, [contentManagerName])
	
	const fieldUrl = useMemo(() => {
		return ClientFieldUrlReplacer.pageUrlToFieldUrl(page as string)
	}, [page])
	
	const field = useMemo(() => {
		const field = contentManager.getField(fieldUrl)
		const isObject = FieldsMatcher.isObject(field)
		if (!isObject) {
			throw new Error('Field mast be object')
		}
		return field.getShape()[key as string]
	}, [contentManager, fieldUrl, key])
	
	
	return (
		<PageLayoutView>
			
			<PageInfo
				title={field.getName()}
				icon={field.getIcon()}
			/>
			
			<ClientContent
				provider={contentManager.provider}
				contentManager={contentManager}
				fieldKey={key as string}
				fieldUrl={fieldUrl}
				locale={clientAppContext.targetLocale}
				field={field}
			
			/>
		</PageLayoutView>
	);
};

