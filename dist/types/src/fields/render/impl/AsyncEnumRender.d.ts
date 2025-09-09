import React from "react";
import { IEnumAsyncField } from "../../interfaces/enum";
import { IAsyncEnumPreviewRenderConfig, IAsyncEnumRender } from "../interfaces/asyncEnum";
import { AsyncEnumRenderPreviewRenderConfig } from "../previewRenderConfig/AsyncEnumRenderPreviewRenderConfig";
export declare class AsyncEnumRender<Value extends readonly string[]> implements IAsyncEnumRender<Value> {
    previewRenderConfig: AsyncEnumRenderPreviewRenderConfig;
    FieldRender(props: {
        field: IEnumAsyncField<any>;
        initialValue: string | null | undefined;
        onChange: (value: string | undefined | null) => void;
    }): React.ReactNode;
    PreviewRender(props: {
        field: IEnumAsyncField<any>;
        value: string | null | undefined;
        renderConfig: IAsyncEnumPreviewRenderConfig;
    }): React.ReactNode;
}
