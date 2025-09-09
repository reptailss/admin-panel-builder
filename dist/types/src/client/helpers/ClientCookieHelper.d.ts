export declare class ClientCookieHelper {
    static get(name: string): string | null;
    static set(name: string, value: string | number | boolean, options?: {
        path?: string;
        expires?: string;
        maxAge?: number;
    }): void;
    static delete(name: string, path?: string): void;
}
