import { RequirePathParams } from "./types";
export declare class AdminAuthRequest {
    static get<Url extends string>({ url, headers, searchParams, token, ...rest }: {
        url: Url;
        searchParams?: Record<string, string>;
        token: string;
    } & RequirePathParams<Url> & Omit<RequestInit, 'method'>): Promise<any>;
    static put<Url extends string>({ url, headers, searchParams, token, ...rest }: {
        url: Url;
        searchParams?: Record<string, string>;
        token: string;
    } & RequirePathParams<Url> & Omit<RequestInit, 'method'>): Promise<any>;
    static post<Url extends string>({ url, headers, searchParams, token, ...rest }: {
        url: Url;
        searchParams?: Record<string, string>;
        token: string;
    } & RequirePathParams<Url> & Omit<RequestInit, 'method'>): Promise<any>;
    static delete<Url extends string>({ url, headers, searchParams, token, ...rest }: {
        url: Url;
        searchParams?: Record<string, string>;
        token: string;
    } & RequirePathParams<Url> & Omit<RequestInit, 'method'>): Promise<any>;
}
