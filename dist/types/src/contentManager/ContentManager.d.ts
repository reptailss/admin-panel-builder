import { IContentManager, IContentManagerAction, IContentManagerField, IContentManagerProvider } from "./interfaces";
import { IField } from "../fields/interfaces/field";
export declare class ContentManager implements IContentManager {
    private readonly name;
    provider: IContentManagerProvider;
    private contentManagerFields;
    private actionsRoles;
    private globalActionsRoles;
    private actions;
    constructor(name: string, provider: IContentManagerProvider);
    addField<Value extends object>(field: IContentManagerField<Value>): this;
    getField<Value extends object>(fieldUrl: string): IField<Value>;
    getFieldsInfo(): {
        fieldUrl: string;
        name: string | null;
        icon: string | null;
    }[];
    getName(): string;
    setActionRolesByType(rolesByType: {
        read?: readonly string[];
        save?: readonly string[];
        delete?: readonly string[];
    }): this;
    getActionsRolesByTypes(): {
        read?: readonly string[];
        save?: readonly string[];
        delete?: readonly string[];
    };
    setGlobalActionRoles(roles: readonly string[]): this;
    getGlobalActionRoles(): readonly string[];
    addAction(action: IContentManagerAction): this;
    getActions(): IContentManagerAction[];
}
