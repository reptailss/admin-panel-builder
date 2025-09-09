export declare function useRequest(initialLoading?: boolean): {
    onRequest<T>(cb: () => Promise<T>): Promise<T | null>;
    isLoading: boolean;
};
