import { EditorState } from "draft-js";
export declare function useSetStateByInitialValue({ setEditorState, initial, }: {
    setEditorState: (state: EditorState) => void;
    initial?: string;
}): void;
