import React, { memo } from 'react';
import {IContentManagerAction} from "@contentManager/interfaces";
import {SecondaryBtn} from "@client/ui/buttons/SecondaryBtn";

export const ClientContentActions = memo(({
										 actions,
										 onClickAction
									 }: {
	actions: IContentManagerAction[]
	onClickAction: (action: IContentManagerAction) => Promise<void>;
}) => {
	if (!actions.length) {
		return null
	}
	
	return actions.map((action,index) => {
		return (
			<SecondaryBtn
				onClick={async () => {
					await onClickAction(action);
				}}
				key={index}
			>
				{action.getName()}
			</SecondaryBtn>
		)
	});
});

