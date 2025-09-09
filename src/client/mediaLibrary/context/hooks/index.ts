import {useContext} from "react"
import {
	DataClientMediaLibraryContextValue,
	RootClientMediaLibraryContextValue
} from "@client/mediaLibrary/context/providers";


export const useRootMediaLibraryContext = () => useContext(RootClientMediaLibraryContextValue)
export const useDataMediaLibraryContext = () => useContext(DataClientMediaLibraryContextValue)