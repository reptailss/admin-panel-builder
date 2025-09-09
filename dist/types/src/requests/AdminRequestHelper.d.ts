export declare class AdminRequestHelper {
    static buildAuthHeaders(token: string, headers?: HeadersInit): HeadersInit;
    static interpolateUrl(url: string | URL, pathParams: Record<string, string | number>): string;
}
