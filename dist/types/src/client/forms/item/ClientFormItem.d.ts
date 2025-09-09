import { IField } from "../../../fields/interfaces/field";
import { OnDeleteForm, OnEditForm } from "../types/events";
type GetCardPreviewValueCb<Form extends object, Field extends IField> = (post: Form) => Field['_value'];
export declare function ClientFormItem<Form extends object>({ form, onDeleteForm, onEditForm, cardPreviewFields, guards, }: {
    form: Form;
    onDeleteForm: OnDeleteForm;
    onEditForm: OnEditForm;
    cardPreviewFields: Array<{
        value: keyof Form | GetCardPreviewValueCb<Form, IField<any>>;
        field: IField<Form[keyof Form]> | IField<any>;
    }>;
    guards: {
        read: boolean;
        update: boolean;
        delete: boolean;
    };
}): import("react/jsx-runtime").JSX.Element;
export {};
