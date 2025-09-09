import { IField } from "../fields/interfaces/field";
type GetCardPreviewValueCb<Post extends object, Field extends IField> = (post: Post) => Field['_value'];
export interface IFormManager<Form extends object, UpdateForm extends object> {
    provider: IFormManagerProvider<Form, UpdateForm>;
    updateField: IField<UpdateForm>;
    getName(): string;
    setIcon(icon: string): this;
    getIcon(): string | null;
    addCardPreviewField<Value extends keyof Form>(value: Value, field: IField<Form[Value]>): this;
    addCardPreviewField<Field extends IField>(value: GetCardPreviewValueCb<Form, Field>, field: Field): this;
    getCardPreviewFields(): Array<{
        value: keyof Form | GetCardPreviewValueCb<Form, IField<any>>;
        field: IField<Form[keyof Form]> | IField<any>;
    }>;
    setGlobalActionRoles(roles: readonly string[]): this;
    setActionRolesByType(rolesByType: {
        read?: readonly string[];
        update?: readonly string[];
        delete?: readonly string[];
    }): this;
    getActionsRolesByTypes(): {
        read?: readonly string[];
        update?: readonly string[];
        delete?: readonly string[];
    };
    getGlobalActionRoles(): readonly string[];
}
export interface IFormManagerProvider<Form extends object, UpdateForm extends object> {
    updateForm(props: {
        form: Form;
        updateForm: UpdateForm;
        locale: string | null;
        token: string | null;
    }): Promise<void>;
    deleteForm(props: {
        form: Form;
        locale: string | null;
        token: string | null;
    }): Promise<void>;
    getUpdateFormFromForm(props: {
        locale: string | null;
        token: string | null;
        form: Form;
    }): Promise<UpdateForm>;
    getForms(props: {
        locale: string | null;
        token: string | null;
    }): Promise<Form[]>;
}
export {};
