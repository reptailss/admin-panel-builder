import { OnSavePost } from "../types/events";
import { IPostManager } from "../../../postManager/interfaces";
export declare const ClientMutatePost: ({ initial, onSavePost, postManager, }: {
    initial?: any | null;
    onSavePost: OnSavePost;
    postManager: IPostManager<any, any>;
}) => import("react/jsx-runtime").JSX.Element;
