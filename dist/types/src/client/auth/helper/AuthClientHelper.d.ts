export declare class AuthClientHelper {
    static saveTokens({ accessToken, refreshToken, expiresIn, }: {
        accessToken: string;
        refreshToken: string;
        expiresIn: number;
    }): void;
    static getAccessToken(): string | null;
    static getRefreshToken(): string | null;
    static deleteTokens(): void;
}
