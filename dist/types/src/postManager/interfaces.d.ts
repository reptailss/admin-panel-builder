import { IField } from "../fields/interfaces/field";
type GetCardPreviewImageCb<Post extends object> = (post: Post) => string;
type GetCardPreviewValueCb<Post extends object, Field extends IField> = (post: Post) => Field['_value'];
export interface IPostManager<Post extends object, CreatePost extends object> {
    provider: IPostManagerProvider<Post, CreatePost>;
    createField: IField<CreatePost>;
    getName(): string;
    setIcon(icon: string): this;
    getIcon(): string | null;
    addCardPreviewField<Value extends keyof Post>(value: Value, field: IField<Post[Value]>): this;
    addCardPreviewField<Field extends IField>(value: GetCardPreviewValueCb<Post, Field>, field: Field): this;
    getCardPreviewFields(): Array<{
        value: keyof Post | GetCardPreviewValueCb<Post, IField<any>>;
        field: IField<Post[keyof Post]> | IField<any>;
    }>;
    setCardPreviewImage(value: (keyof Post) | GetCardPreviewImageCb<Post>): this;
    getCardPreviewImage(): (keyof Post) | GetCardPreviewImageCb<Post> | null;
    setGlobalActionRoles(roles: readonly string[]): this;
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
    getGlobalActionRoles(): readonly string[];
}
export interface IPostManagerProvider<Post extends object, CreatePost extends object> {
    createPost(props: {
        createPost: CreatePost;
        locale: string | null;
        token: string | null;
    }): Promise<void>;
    updatePost(props: {
        post: Post;
        createPost: CreatePost;
        locale: string | null;
        token: string | null;
    }): Promise<void>;
    deletePost(props: {
        post: Post;
        locale: string | null;
        token: string | null;
    }): Promise<void>;
    getCreatePostFromPost(props: {
        locale: string | null;
        token: string | null;
        post: Post;
    }): Promise<CreatePost>;
    getPosts(props: {
        locale: string | null;
        token: string | null;
    }): Promise<Post[]>;
}
export interface IMultilanguagePostManager<Post extends object, BaseField extends object, MultilanguageField extends object, Locales extends readonly string[] = string[]> {
    provider: IMultilanguagePostManagerProvider<Post, BaseField, MultilanguageField, Locales>;
    baseField: IField<BaseField>;
    multilanguageField: IField<MultilanguageField>;
    getName(): string;
    setIcon(icon: string): this;
    getIcon(): string | null;
    addCardPreviewField<Value extends keyof Post>(value: Value, field: IField<Post[Value]>): this;
    addCardPreviewField<Field extends IField>(value: GetCardPreviewValueCb<Post, Field>, field: Field): this;
    getCardPreviewFields(): Array<{
        value: keyof Post | GetCardPreviewValueCb<Post, IField<any>>;
        field: IField<Post[keyof Post]> | IField<any>;
    }>;
    setCardPreviewImage(value: (keyof Post) | GetCardPreviewImageCb<Post>): this;
    getCardPreviewImage(): (keyof Post) | GetCardPreviewImageCb<Post> | null;
    setGlobalActionRoles(roles: readonly string[]): this;
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
    getGlobalActionRoles(): readonly string[];
    getLocales(): Locales | null;
}
export interface IMultilanguagePostManagerProvider<Post extends object, BaseField extends object, MultilanguageField extends object, Locales extends readonly string[] = string[]> {
    createPost(props: {
        baseField: BaseField;
        multilanguageField: Record<Locales[number], MultilanguageField>;
        token: string | null;
    }): Promise<void>;
    updatePost(props: {
        post: Post;
        baseField: BaseField;
        multilanguageField: Record<Locales[number], MultilanguageField>;
        token: string | null;
    }): Promise<void>;
    deletePost(props: {
        post: Post;
        token: string | null;
    }): Promise<void>;
    getFieldsFromPost(props: {
        token: string | null;
        post: Post;
    }): Promise<{
        baseField: BaseField;
        multilanguageField: Record<Locales[number], MultilanguageField | null>;
    }>;
    getPosts(props: {
        locale: string | null;
        token: string | null;
    }): Promise<Post[]>;
}
export {};
