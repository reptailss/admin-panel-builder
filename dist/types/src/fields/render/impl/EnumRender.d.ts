import React from "react";
import { IEnumAsyncField, IEnumField } from "../../interfaces/enum";
import { IEnumPreviewRenderConfig, IEnumRender } from "../interfaces/enum";
import { EnumRenderPreviewRenderConfig } from "../previewRenderConfig/EnumRenderPreviewRenderConfig";
export declare class EnumRender<Value extends readonly string[]> implements IEnumRender<Value> {
    previewRenderConfig: EnumRenderPreviewRenderConfig;
    FieldRender(props: {
        field: IEnumField<any>;
        initialValue: string | null | undefined;
        onChange: (value: string | undefined | null) => void;
    }): React.ReactNode;
    PreviewRender(props: {
        field: IEnumAsyncField<any>;
        value: string | null | undefined;
        renderConfig: IEnumPreviewRenderConfig;
    }): React.ReactNode;
}
