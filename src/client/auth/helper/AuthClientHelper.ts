import {ClientCookieHelper} from "@client/helpers/ClientCookieHelper"

export class AuthClientHelper {
	
	static saveTokens({
						  accessToken,
						  refreshToken,
						  expiresIn,
					  }: {
		accessToken: string
		refreshToken: string
		expiresIn: number
	}): void {
		ClientCookieHelper.set(
			'access_token',
			accessToken,
			{
				maxAge: expiresIn,
			}
		)
		ClientCookieHelper.set(
			'refresh_token',
			refreshToken,
		)
	}
	
	static getAccessToken(): string | null {
		return ClientCookieHelper.get('access_token')
	}
	
	static getRefreshToken(): string | null {
		return ClientCookieHelper.get('refresh_token')
	}
	
	static deleteTokens(): void {
		ClientCookieHelper.delete('access_token')
		ClientCookieHelper.delete('refresh_token')
	}
}