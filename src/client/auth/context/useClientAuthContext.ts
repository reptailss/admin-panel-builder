import {ClientAuthContextValue} from "@client/auth/context/index";
import {useContext} from "react";
import {ClientAuthContext} from "@client/auth/context/types";

export function useClientAuthContext(): ClientAuthContext {
	const context = useContext(ClientAuthContextValue)
	if (!context) {
		throw new Error('Not Found auth context')
	}
	return useContext(ClientAuthContextValue) as ClientAuthContext
}