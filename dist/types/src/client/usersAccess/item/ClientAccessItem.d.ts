import { IField } from "../../../fields/interfaces/field";
import { OnEditAccess } from "../types/events";
type GetUserPreviewValueCb<UserInfo extends object, Field extends IField> = (userInfo: UserInfo) => Field['_value'];
export declare function ClientAccessItem<UserInfo extends object>({ userInfo, onEditAccess, userPreviewFields, guards, }: {
    userInfo: UserInfo;
    onEditAccess: OnEditAccess;
    userPreviewFields: Array<{
        value: keyof UserInfo | GetUserPreviewValueCb<UserInfo, IField<any>>;
        field: IField<UserInfo[keyof UserInfo]> | IField<any>;
    }>;
    guards: {
        save: boolean;
        delete: boolean;
    };
}): import("react/jsx-runtime").JSX.Element;
export {};
