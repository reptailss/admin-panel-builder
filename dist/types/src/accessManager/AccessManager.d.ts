import { IField } from "../fields/interfaces/field";
import { IAccessManager, IAccessManagerProvider } from "./interfaces";
type GetUserPreviewValueCb<UserInfo extends object, Field extends IField> = (userInfo: UserInfo) => Field['_value'];
export declare class AccessManager<UserInfo extends object> implements IAccessManager<UserInfo> {
    private readonly name;
    readonly provider: IAccessManagerProvider<UserInfo>;
    private userPreviewFields;
    private actionsRoles;
    private globalActionsRoles;
    private icon;
    constructor(name: string, provider: IAccessManagerProvider<UserInfo>);
    getName(): string;
    setIcon(icon: string): this;
    getIcon(): string | null;
    addUserPreviewField<Field extends IField>(value: GetUserPreviewValueCb<UserInfo, Field>, field: Field): this;
    addUserPreviewField<Value extends keyof UserInfo>(value: Value, field: IField<UserInfo[Value]>): this;
    getUserPreviewFields(): Array<{
        value: keyof UserInfo | GetUserPreviewValueCb<UserInfo, IField<any>>;
        field: IField<UserInfo[keyof UserInfo]> | IField<any>;
    }>;
    setGlobalActionRoles(roles: readonly string[]): this;
    getGlobalActionRoles(): readonly string[];
    setActionRolesByType(rolesByType: {
        read?: readonly string[];
        save?: readonly string[];
        delete?: readonly string[];
    }): this;
    getActionsRolesByTypes(): {
        create?: readonly string[];
        update?: readonly string[];
        delete?: readonly string[];
    };
}
export {};
