import {useEffect} from "react";
import {EditorState} from "draft-js";
import {convertHtmlToEditorState} from "@client/editor/helpers/convertHtmlToEditorState";

export function useSetStateByInitialValue({
											  setEditorState,
											  initial,
										  }: {
	setEditorState: (state: EditorState) => void
	initial?: string
}) {
	useEffect(() => {
		setEditorState(convertHtmlToEditorState(initial))
	}, []);
}

