import { RequirePathParams } from "./types";
export declare class AdminRequest {
    static get<Url extends string>({ url, searchParams, ...rest }: {
        url: Url;
        searchParams?: Record<string, string>;
    } & RequirePathParams<Url> & Omit<RequestInit, 'method'>): Promise<any>;
    static put<Url extends string>({ url, searchParams, ...rest }: {
        url: Url;
        searchParams?: Record<string, string>;
    } & RequirePathParams<Url> & Omit<RequestInit, 'method'>): Promise<any>;
    static post<Url extends string>({ url, searchParams, ...rest }: {
        url: Url;
        searchParams?: Record<string, string>;
    } & RequirePathParams<Url> & Omit<RequestInit, 'method'>): Promise<any>;
    static delete<Url extends string>({ url, searchParams, ...rest }: {
        url: Url;
        searchParams?: Record<string, string>;
    } & RequirePathParams<Url> & Omit<RequestInit, 'method'>): Promise<any>;
}
