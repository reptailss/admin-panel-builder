import React, {useCallback, useMemo} from 'react';
import {OnSaveMultilanguagePost} from "@client/posts/types/events";
import {ClientValueBuilder} from "@client/valueBuilder/ClientValueBuilder";
import {MultilanguagePostManager} from "@postManager/MultilanguagePostManager";
import {useClientAppContext} from "@client/app/context/useClientAppContext";
import {FieldsMatcher} from "@fields/helper/FieldsMatcher";
import {IField} from '@fields/interfaces/field';
import {ObjectField} from '@fields/impl/ObjectField';

export const ClientMultilanguageMutatePost = ({
												  initialBaseFields,
												  initialMultilanguageField,
												  onSavePost,
												  multilanguagePostManager,
											  }: {
	initialBaseFields?: any | null
	initialMultilanguageField?: any | null
	onSavePost: OnSaveMultilanguagePost
	multilanguagePostManager: MultilanguagePostManager<any, any, any>
}) => {
	
	const clientAppContext = useClientAppContext()
	
	const handleSave = useCallback((content: any) => {
		onSavePost(content?.baseField || null, content?.multilanguageField || null);
	}, [multilanguagePostManager, onSavePost])
	
	const field = useMemo(() => {
		const targetLocales = multilanguagePostManager.getLocales() || clientAppContext.locales
		const newMultiObjectFields: Record<string, IField> = {}
		
		for (const key of targetLocales) {
			if (FieldsMatcher.isObject(multilanguagePostManager.multilanguageField)) {
				newMultiObjectFields[key] = multilanguagePostManager.multilanguageField.clone().setName(key).setIcon('material-symbols:language')
			} else {
				newMultiObjectFields[key] = multilanguagePostManager.multilanguageField.setIcon('material-symbols:language')
			}
			
		}
		return new ObjectField({
			baseField: multilanguagePostManager.baseField,
			multilanguageField: new ObjectField(newMultiObjectFields),
			
		})
	}, [multilanguagePostManager, clientAppContext.locales])
	
	const initialValue = useMemo(() => {
		return {
			baseField: initialBaseFields,
			multilanguageField: initialMultilanguageField,
		}
	}, [initialBaseFields, initialMultilanguageField])
	return (
		<ClientValueBuilder
			field={field}
			onSave={handleSave}
			initialValue={initialValue}
		/>
	);
};

