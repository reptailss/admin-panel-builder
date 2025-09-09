import { IField } from "../fields/interfaces/field";
import { IFormManager, IFormManagerProvider } from "./interfaces";
type GetCardPreviewValueCb<Post extends object, Field extends IField> = (post: Post) => Field['_value'];
export declare class FormManager<Form extends object, UpdateForm extends object> implements IFormManager<Form, UpdateForm> {
    private readonly name;
    readonly updateField: IField<UpdateForm>;
    readonly provider: IFormManagerProvider<Form, UpdateForm>;
    private icon;
    private cardPreviewFields;
    private actionsRoles;
    private globalActionsRoles;
    constructor(name: string, updateField: IField<UpdateForm>, provider: IFormManagerProvider<Form, UpdateForm>);
    getName(): string;
    setIcon(icon: string): this;
    getIcon(): string | null;
    addCardPreviewField<Field extends IField>(value: GetCardPreviewValueCb<Form, Field>, field: Field): this;
    addCardPreviewField<Value extends keyof Form>(value: Value, field: IField<Form[Value]>): this;
    getCardPreviewFields(): Array<{
        value: keyof Form | GetCardPreviewValueCb<Form, IField<any>>;
        field: IField<Form[keyof Form]>;
    }>;
    setGlobalActionRoles(roles: readonly string[]): this;
    getGlobalActionRoles(): readonly string[];
    setActionRolesByType(rolesByType: {
        read?: readonly string[];
        update?: readonly string[];
        delete?: readonly string[];
    }): this;
    getActionsRolesByTypes(): {
        read?: readonly string[];
        create?: readonly string[];
        update?: readonly string[];
        delete?: readonly string[];
    };
}
export {};
