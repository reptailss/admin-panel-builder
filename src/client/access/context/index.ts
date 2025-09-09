import {createContext} from "react";
import {ClientAccessContext} from "@client/access/context/types";

export const ClientAccessContextValue = createContext<ClientAccessContext | undefined>(undefined);