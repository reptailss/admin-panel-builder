import React from "react";
import { IBooleanRender } from "../interfaces/boolean";
import { IAbstractField } from "../../interfaces/abstractField";
export declare class BooleanRender implements IBooleanRender {
    previewRenderConfig: null;
    FieldRender(props: {
        field: IAbstractField<boolean | null | undefined>;
        initialValue: boolean | null | undefined;
        onChange: (value: boolean) => void;
    }): React.ReactNode;
    PreviewRender(props: {
        field: IAbstractField<boolean | null | undefined>;
        value: boolean | null | undefined;
    }): React.ReactNode;
}
