import { IMediaValueProvider } from "../../fields/interfaces/mediaValueProvider";
export declare const ClientMediaLibraryInputModal: ({ initialValue, onChange, provider, label, icon, mediaType, globalRoles, rolesByTypes, }: {
    onChange: (value: string) => void;
    initialValue: string | null;
    provider: IMediaValueProvider;
    label?: string | undefined;
    icon?: string | null | undefined;
    mediaType: 'image' | 'video' | null;
    globalRoles: readonly string[];
    rolesByTypes: {
        createFolder?: readonly string[];
        updateFolder?: readonly string[];
        deleteFolder?: readonly string[];
        createFile?: readonly string[];
        deleteFile?: readonly string[];
    };
}) => import("react/jsx-runtime").JSX.Element;
