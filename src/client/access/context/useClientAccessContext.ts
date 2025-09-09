import {useContext} from "react";
import {ClientAccessContext} from "@client/access/context/types";
import {ClientAccessContextValue} from "@client/access/context/index";

export function useClientAccessContext(): ClientAccessContext {
	const context = useContext(ClientAccessContextValue)
	if (!context) {
		throw new Error('Not Found access context')
	}
	return useContext(ClientAccessContextValue) as ClientAccessContext
}