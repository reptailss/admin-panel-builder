export declare function useActionsClientMediaLibraryFolders(onSuccess?: () => void): {
    deleteFolder: (id: string | number) => Promise<void>;
    createFolder: (folder: {
        name: string;
        parent_id: string | number;
    }) => Promise<void>;
    updateFolder: (folder: {
        name: string;
        parent_id: string | number;
        id: string | number;
    }) => Promise<void>;
    isPending: boolean;
};
