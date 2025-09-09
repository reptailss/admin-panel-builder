import { OnSaveAccess } from "../types/events";
export declare const ClientMutateAccess: ({ initial, allRoles, onSaveAccess, guards, onDeleteAccess, }: {
    initial?: string[] | null | undefined;
    onSaveAccess: OnSaveAccess;
    onDeleteAccess: () => void;
    allRoles: Array<string | {
        value: string;
        label: string;
    }>;
    guards: {
        save: boolean;
        delete: boolean;
    };
}) => import("react/jsx-runtime").JSX.Element;
