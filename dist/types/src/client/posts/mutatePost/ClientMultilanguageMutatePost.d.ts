import { OnSaveMultilanguagePost } from "../types/events";
import { MultilanguagePostManager } from "../../../postManager/MultilanguagePostManager";
export declare const ClientMultilanguageMutatePost: ({ initialBaseFields, initialMultilanguageField, onSavePost, multilanguagePostManager, }: {
    initialBaseFields?: any | null;
    initialMultilanguageField?: any | null;
    onSavePost: OnSaveMultilanguagePost;
    multilanguagePostManager: MultilanguagePostManager<any, any, any>;
}) => import("react/jsx-runtime").JSX.Element;
