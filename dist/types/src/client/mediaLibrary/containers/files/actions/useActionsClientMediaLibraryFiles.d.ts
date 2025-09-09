import { ClientMediaFile } from "../../../types";
export declare function useActionsClientMediaLibraryFiles(onSuccess?: () => void): {
    deleteFile: (id: string | number) => Promise<void>;
    createFile: (folder: {
        file: File;
        name: string;
        folder_id: number | string;
    }) => Promise<void>;
    isPending: boolean;
    selectFile: (file: ClientMediaFile) => void;
};
