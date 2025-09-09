import { OnChangeEditorImageToolbar } from "./types";
import { IMediaValueProvider } from "../../../../fields/interfaces/mediaValueProvider";
export declare const EditorImageToolbar: ({ onChange, mediaProvider, mediaRolesByTypes, mediaGlobalRoles, onSave }: {
    onChange: OnChangeEditorImageToolbar;
    mediaProvider: IMediaValueProvider;
    mediaGlobalRoles: readonly string[];
    mediaRolesByTypes: {
        createFolder?: readonly string[];
        updateFolder?: readonly string[];
        deleteFolder?: readonly string[];
        createFile?: readonly string[];
        deleteFile?: readonly string[];
    };
    onSave?: (() => void) | undefined;
}) => import("react/jsx-runtime").JSX.Element;
