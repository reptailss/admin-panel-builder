import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { IMediaValueProvider } from "../../fields/interfaces/mediaValueProvider";
export declare const Editor: ({ initial, onChange, mediaProvider, mediaRolesByTypes, mediaGlobalRoles, }: {
    initial?: string | undefined;
    onChange: (res: string) => void;
    mediaProvider: IMediaValueProvider | null;
    mediaGlobalRoles: readonly string[];
    mediaRolesByTypes: {
        createFolder?: readonly string[];
        updateFolder?: readonly string[];
        deleteFolder?: readonly string[];
        createFile?: readonly string[];
        deleteFile?: readonly string[];
    };
}) => import("react/jsx-runtime").JSX.Element | null;
