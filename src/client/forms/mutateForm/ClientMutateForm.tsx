import React, {useCallback} from 'react';
import {ClientValueBuilder} from "@client/valueBuilder/ClientValueBuilder";
import {OnSaveForm} from "@client/forms/types/events";
import {IFormManager} from "@formManager/interfaces";

export const ClientMutateForm = ({
									 initial,
									 onSaveForm,
									 formManager,
								 }: {
	initial?: any | null
	onSaveForm: OnSaveForm
	formManager: IFormManager<any, any>
}) => {
	
	const handleSave = useCallback((content: any) => {
		onSaveForm(content);
	}, [formManager, onSaveForm])
	return (
		<ClientValueBuilder
			field={formManager.updateField}
			onSave={handleSave}
			initialValue={initial || null}
		/>
	);
};

