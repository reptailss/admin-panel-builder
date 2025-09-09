export type ClientMediaFile = {
    name: string;
    folder_id: string | number;
    file: string;
    id: number | string;
    mimetype?: string | null;
};
export type ClientMediaFolder = {
    parent_id: string | number;
    id: number | string;
    name: string;
};
