import {createContext} from 'react'
import {AppClientContext} from "@client/app/context/types";

export const ClientAppContextValue = createContext<AppClientContext | undefined>(undefined)