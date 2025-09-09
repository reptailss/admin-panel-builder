import {useContext} from "react";
import {ClientAppContextValue} from "@client/app/context/index";

export function useClientAppContext() {
	const context = useContext(ClientAppContextValue)
	if (!context) {
		throw new Error('Not Found app context')
	}
	return context;
}