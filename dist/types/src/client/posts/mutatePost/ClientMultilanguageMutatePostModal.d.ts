import { OnSaveMultilanguagePost } from "../types/events";
import { MultilanguagePostManager } from "../../../postManager/MultilanguagePostManager";
export declare const ClientMultilanguageMutatePostModal: ({ initialBaseFields, initialMultilanguageField, onSavePost, multilanguagePostManager, openModal, onCloseModal, }: {
    initialBaseFields?: any | null;
    initialMultilanguageField?: any | null;
    onSavePost: OnSaveMultilanguagePost;
    multilanguagePostManager: MultilanguagePostManager<any, any, any>;
    openModal: boolean;
    onCloseModal: () => void;
}) => import("react/jsx-runtime").JSX.Element;
