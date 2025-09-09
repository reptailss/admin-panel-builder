import {IAuth2FaProvider, IAuthProvider} from "@auth/interfaces";

export class ClientAuthProviderMather {
	static is2FaAuthProvider(authProvider: IAuthProvider | IAuth2FaProvider<any>): authProvider is IAuth2FaProvider<any> {
		return 'checkNeed2FaByLoginResponse' in authProvider
	}
}