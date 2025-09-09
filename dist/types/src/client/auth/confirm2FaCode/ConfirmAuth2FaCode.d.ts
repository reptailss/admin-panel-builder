import { IAuth2FaField } from "../../../auth/interfaces";
export declare const ConfirmAuth2FaCode: ({ onReset, loginResponse, onToFa, fields, }: {
    onReset: () => void;
    onToFa: (codes: Record<string, string>) => Promise<void>;
    loginResponse: any;
    fields: IAuth2FaField<any>[];
}) => import("react/jsx-runtime").JSX.Element;
