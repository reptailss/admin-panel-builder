import { OnSaveForm } from "../types/events";
import { IFormManager } from "../../../formManager/interfaces";
export declare const ClientMutateFormModal: ({ initial, onSaveForm, formManager, onCloseModal, openModal, }: {
    initial?: any | null;
    onSaveForm: OnSaveForm;
    formManager: IFormManager<any, any>;
    openModal: boolean;
    onCloseModal: () => void;
}) => import("react/jsx-runtime").JSX.Element;
