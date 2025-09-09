import React, {useCallback} from 'react';
import {OnSavePost} from "@client/posts/types/events";
import {IPostManager} from "@postManager/interfaces";
import {ClientValueBuilder} from "@client/valueBuilder/ClientValueBuilder";

export const ClientMutatePost = ({
									 initial,
									 onSavePost,
									 postManager,
								 }: {
	initial?: any | null
	onSavePost: OnSavePost
	postManager: IPostManager<any, any>
}) => {
	
	const handleSave = useCallback((content: any) => {
		onSavePost(content);
	}, [postManager, onSavePost])
	return (
		<ClientValueBuilder
			field={postManager.createField}
			onSave={handleSave}
			initialValue={initial || null}
		/>
	);
};

