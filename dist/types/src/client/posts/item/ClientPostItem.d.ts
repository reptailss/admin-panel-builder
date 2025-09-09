import { OnDeletePost, OnEditPost } from "../types/events";
import { IField } from "../../../fields/interfaces/field";
type GetCardPreviewValueCb<Post extends object, Field extends IField> = (post: Post) => Field['_value'];
type GetCardPreviewImageCb<Post extends object> = (post: Post) => string;
export declare function ClientPostItem<Post extends object>({ post, onDeletePost, onEditPost, cardPreviewFields, cardPreviewImage, guards, }: {
    post: Post;
    onDeletePost: OnDeletePost;
    onEditPost: OnEditPost;
    cardPreviewFields: Array<{
        value: keyof Post | GetCardPreviewValueCb<Post, IField<any>>;
        field: IField<Post[keyof Post]> | IField<any>;
    }>;
    cardPreviewImage: keyof Post | GetCardPreviewImageCb<Post> | null;
    guards: {
        read: boolean;
        create: boolean;
        update: boolean;
        delete: boolean;
    };
}): import("react/jsx-runtime").JSX.Element;
export {};
