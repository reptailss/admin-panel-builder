import React from "react";
import { IBooleanNumRender } from "../interfaces/booleanNum";
import { IAbstractField } from "../../interfaces/abstractField";
export declare class BooleanNumRender implements IBooleanNumRender {
    previewRenderConfig: null;
    FieldRender(props: {
        field: IAbstractField<0 | 1 | null | undefined>;
        initialValue: 0 | 1 | null | undefined;
        onChange: (value: 0 | 1) => void;
    }): React.ReactNode;
    PreviewRender(props: {
        field: IAbstractField<0 | 1 | null | undefined>;
        value: 0 | 1 | null | undefined;
    }): React.ReactNode;
}
