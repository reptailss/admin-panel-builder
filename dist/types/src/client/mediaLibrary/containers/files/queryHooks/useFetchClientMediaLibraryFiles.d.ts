import { IMediaValueProvider } from "../../../../../fields/interfaces/mediaValueProvider";
import { ClientMediaFile } from "../../../types";
export declare function useFetchClientMediaLibraryFiles(provider: IMediaValueProvider): {
    isLoading: boolean;
    files: ClientMediaFile[];
    fetchFiles: () => Promise<void>;
};
