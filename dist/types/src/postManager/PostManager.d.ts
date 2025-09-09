import { IField } from "../fields/interfaces/field";
import { IPostManager, IPostManagerProvider } from "./interfaces";
type GetCardPreviewImageCb<Post extends object> = (post: Post) => string;
type GetCardPreviewValueCb<Post extends object, Field extends IField> = (post: Post) => Field['_value'];
export declare class PostManager<Post extends object, CreatePost extends object> implements IPostManager<Post, CreatePost> {
    private readonly name;
    readonly createField: IField<CreatePost>;
    readonly provider: IPostManagerProvider<Post, CreatePost>;
    private icon;
    private cardPreviewFields;
    private cardPreviewImage;
    private actionsRoles;
    private globalActionsRoles;
    constructor(name: string, createField: IField<CreatePost>, provider: IPostManagerProvider<Post, CreatePost>);
    getName(): string;
    setIcon(icon: string): this;
    getIcon(): string | null;
    addCardPreviewField<Field extends IField>(value: GetCardPreviewValueCb<Post, Field>, field: Field): this;
    addCardPreviewField<Value extends keyof Post>(value: Value, field: IField<Post[Value]>): this;
    getCardPreviewFields(): Array<{
        value: keyof Post | GetCardPreviewValueCb<Post, IField<any>>;
        field: IField<Post[keyof Post]>;
    }>;
    setCardPreviewImage(value: keyof Post | GetCardPreviewImageCb<Post>): this;
    getCardPreviewImage(): (keyof Post) | GetCardPreviewImageCb<Post> | null;
    setGlobalActionRoles(roles: readonly string[]): this;
    getGlobalActionRoles(): readonly string[];
    setActionRolesByType(rolesByType: {
        read?: readonly string[];
        create?: readonly string[];
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
