import { OnSaveAccess } from "../types/events";
export declare const ClientMutateAccessModal: ({ initial, onCloseModal, allRoles, onSaveAccess, guards, openModal, onDeleteAccess, }: {
    initial?: string[] | null | undefined;
    onSaveAccess: OnSaveAccess;
    allRoles: Array<string | {
        value: string;
        label: string;
    }>;
    guards: {
        save: boolean;
        delete: boolean;
    };
    onCloseModal: () => void;
    openModal: boolean;
    onDeleteAccess: () => void;
}) => import("react/jsx-runtime").JSX.Element;
