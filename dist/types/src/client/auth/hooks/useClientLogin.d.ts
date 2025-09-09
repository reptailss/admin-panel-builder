export declare function useClientLogin(): {
    login: (props: {
        username: string;
        password: string;
    }) => Promise<void>;
    isPending: boolean;
};
