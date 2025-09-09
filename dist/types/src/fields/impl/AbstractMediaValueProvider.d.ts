import { IMediaValueProvider } from "../interfaces/mediaValueProvider";
export declare abstract class AbstractMediaValueProvider implements IMediaValueProvider {
    private globalActionsRoles;
    private actionsRoles;
    abstract createMediaFile(props: {
        file: File;
        name: string;
        folder_id: number | string;
        token: string | null;
    }): Promise<void>;
    abstract deleteMediaFile(props: {
        id: number | string;
        token: string | null;
    }): Promise<void>;
    abstract getAllMediaFiles(props: {
        token: string | null;
    }): Promise<{
        name: string;
        folder_id: number | string;
        file: string;
        id: number | string;
        mimetype?: string | null;
    }[]>;
    abstract createMediaFolder(props: {
        name: string;
        parent_id: string | number;
        token: string | null;
    }): Promise<void>;
    abstract updateMediaFolder(props: {
        name: string;
        parent_id: string | number;
        id: number | string;
        token: string | null;
    }): Promise<void>;
    abstract deleteMediaFolder(props: {
        id: number | string;
        token: string | null;
    }): Promise<void>;
    abstract getAllMediaFolders(props: {
        token: string | null;
    }): Promise<{
        name: string;
        parent_id: number;
        id: number | string;
    }[]>;
    setGlobalActionRoles(roles: readonly string[]): this;
    setActionRolesByType(rolesByType: {
        createFolder?: readonly string[];
        updateFolder?: readonly string[];
        deleteFolder?: readonly string[];
        createFile?: readonly string[];
        deleteFile?: readonly string[];
    }): this;
    getActionsRolesByTypes(): {
        createFolder?: readonly string[];
        updateFolder?: readonly string[];
        deleteFolder?: readonly string[];
        createFile?: readonly string[];
        deleteFile?: readonly string[];
    };
    getGlobalActionRoles(): readonly string[];
}
