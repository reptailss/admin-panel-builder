export interface IAuthProvider {
    login(fields: {
        username: string;
        password: string;
    }): Promise<{
        access_token: string;
        refresh_token: string;
        expires_in: number;
    }>;
    refreshToken(refreshToken: string): Promise<{
        access_token: string;
        refresh_token: string;
        expires_in: number;
    }>;
    getUserInfoByToken(token: string): Promise<{
        userName: string;
        picture: string | null;
    }>;
    onInitAuth(token: string): Promise<void>;
    isInvalidTokenErrorInResponse(response: any): boolean;
}
export interface IAuth2FaProvider<LoginResponse> {
    login(fields: {
        username: string;
        password: string;
    }): Promise<LoginResponse>;
    checkNeed2FaByLoginResponse(response: LoginResponse): Promise<boolean>;
    getTokensFromLoginResponse(response: LoginResponse): Promise<{
        access_token: string;
        refresh_token: string;
        expires_in: number;
    }>;
    get2FaFields(): IAuth2FaField<LoginResponse>[];
    on2Fa(props: {
        loginResponse: LoginResponse;
        codes: Record<string, string>;
    }): Promise<{
        access_token: string;
        refresh_token: string;
        expires_in: number;
    }>;
    refreshToken(refreshToken: string): Promise<{
        access_token: string;
        refresh_token: string;
        expires_in: number;
    }>;
    getUserInfoByToken(token: string): Promise<{
        userName: string;
        picture: string | null;
    }>;
    onInitAuth(token: string): Promise<void>;
    isInvalidTokenErrorInResponse(response: any): boolean;
}
export interface IAuth2FaField<LoginResponse> {
    name: string;
    key: string;
    checkRequired(loginResponse: LoginResponse): boolean;
    refresh(loginResponse: LoginResponse): Promise<void>;
}
