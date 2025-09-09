import {useClientAuthContext} from "@client/auth/context/useClientAuthContext";
import {AuthClientHelper} from "@client/auth/helper/AuthClientHelper";


export function useClientLogOut(): {
	logOut: () => void
} {
	const authClientContext = useClientAuthContext()
	
	const logOut = () => {
		AuthClientHelper.deleteTokens()
		authClientContext.setIsAuth(false)
		authClientContext.setUserInfo(null)
	}
	
	return {
		logOut,
	}
	
}