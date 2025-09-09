import { IAuth2FaField } from "../../../auth/interfaces";
export declare function useClientLogin2Fa(): {
    login: (props: {
        username: string;
        password: string;
    }) => Promise<void>;
    isPending: boolean;
    need2faAuth: boolean;
    loginResponse: any;
    onReset: () => void;
    onToFa: (values: Record<string, string>) => Promise<void>;
    fields: IAuth2FaField<any>[];
};
