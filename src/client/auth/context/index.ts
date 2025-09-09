import {createContext} from "react";
import {ClientAuthContext} from "@client/auth/context/types";

export const ClientAuthContextValue = createContext<ClientAuthContext | undefined>(undefined);