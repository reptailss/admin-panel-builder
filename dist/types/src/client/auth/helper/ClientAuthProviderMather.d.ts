import { IAuth2FaProvider, IAuthProvider } from "../../../auth/interfaces";
export declare class ClientAuthProviderMather {
    static is2FaAuthProvider(authProvider: IAuthProvider | IAuth2FaProvider<any>): authProvider is IAuth2FaProvider<any>;
}
