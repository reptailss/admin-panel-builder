declare global {
    var _PUBLIC_PATH: string;
    var _servicePrefix: string | undefined;
}
export declare class PathsHelper {
    static getBasePath(): string;
    private static getPublicPath;
}
