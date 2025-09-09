import React from 'react';
import { IContentManagerAction } from "../../contentManager/interfaces";
export declare const ClientContentActions: React.MemoExoticComponent<({ actions, onClickAction }: {
    actions: IContentManagerAction[];
    onClickAction: (action: IContentManagerAction) => Promise<void>;
}) => import("react/jsx-runtime").JSX.Element[] | null>;
