import { OnSaveForm } from "../types/events";
import { IFormManager } from "../../../formManager/interfaces";
export declare const ClientMutateForm: ({ initial, onSaveForm, formManager, }: {
    initial?: any | null;
    onSaveForm: OnSaveForm;
    formManager: IFormManager<any, any>;
}) => import("react/jsx-runtime").JSX.Element;
