export type RequirePathParams<TUrl extends string> = ExtractPathParams<TUrl> extends never ? {} : {
    pathParams: PathParams<TUrl>;
};
type ExtractPathParams<T extends string> = T extends `${infer _Prefix}/:${infer Param}/${infer Rest}` ? Param | ExtractPathParams<`/${Rest}`> : T extends `${infer _Prefix}/:${infer Param}` ? Param : never;
type PathParams<T extends string> = {
    [K in ExtractPathParams<T>]: string | number;
};
export {};
