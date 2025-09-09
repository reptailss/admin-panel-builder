import { OnSavePost } from "../types/events";
import { IPostManager } from "../../../postManager/interfaces";
export declare const ClientMutatePostModal: ({ initial, onSavePost, postManager, onCloseModal, openModal, }: {
    initial?: any | null;
    onSavePost: OnSavePost;
    postManager: IPostManager<any, any>;
    openModal: boolean;
    onCloseModal: () => void;
}) => import("react/jsx-runtime").JSX.Element;
