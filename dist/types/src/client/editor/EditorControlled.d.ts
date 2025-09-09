import { EditorState } from 'draft-js';
import './styles.css';
import { IMediaValueProvider } from "../../fields/interfaces/mediaValueProvider";
export declare const EditorControlled: ({ onChange, editorState, setEditorState, mediaProvider, }: {
    onChange: (res: string) => void;
    editorState: EditorState;
    setEditorState: (state: EditorState) => void;
    mediaProvider: IMediaValueProvider | null;
    mediaGlobalRoles: readonly string[];
    mediaRolesByTypes: {
        createFolder?: readonly string[];
        updateFolder?: readonly string[];
        deleteFolder?: readonly string[];
        createFile?: readonly string[];
        deleteFile?: readonly string[];
    };
}) => import("react/jsx-runtime").JSX.Element;
