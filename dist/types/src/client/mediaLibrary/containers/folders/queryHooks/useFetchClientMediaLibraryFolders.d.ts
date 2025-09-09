import { IMediaValueProvider } from "../../../../../fields/interfaces/mediaValueProvider";
import { ClientMediaFolder } from "../../../types";
export declare function useFetchClientMediaLibraryFolders(provider: IMediaValueProvider): {
    isLoading: boolean;
    folders: ClientMediaFolder[];
    fetchFolders: () => Promise<void>;
};
