interface IProps<T> {
    data: T[];
    page: number;
    perPage?: number;
}
export declare function usePaginationCustom<T>({ data, page, perPage, }: IProps<T>): {
    paginationData: T[];
    totalPage: number;
};
export {};
