import { IMediaValueProvider } from "../../../../fields/interfaces/mediaValueProvider";
import { EditorState } from "draft-js";
import { SelectionState } from "react-draft-wysiwyg";
export declare const EditorImageToolbar: ({ mediaProvider, onSave, editorState, setEditorState, focus, }: {
    mediaProvider: IMediaValueProvider;
    onSave?: (() => void) | undefined;
    editorState: EditorState;
    setEditorState: (state: EditorState) => void;
    focus: SelectionState | null;
}) => import("react/jsx-runtime").JSX.Element;
