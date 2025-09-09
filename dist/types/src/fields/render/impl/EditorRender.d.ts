import React from "react";
import { IEditorRender } from "../interfaces/editor";
import { IAbstractField } from "../../interfaces/abstractField";
import { IEditorField } from "../../interfaces/string";
export declare class EditorRender<Field extends IEditorField = IEditorField> implements IEditorRender {
    previewRenderConfig: null;
    FieldRender(props: {
        field: Field;
        initialValue: string | null | undefined;
        onChange: (value: string) => void;
    }): React.ReactNode;
    PreviewRender(props: {
        field: IAbstractField<string | null | undefined>;
        value: string | null | undefined;
    }): React.ReactNode;
}
