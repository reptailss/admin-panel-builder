import React from "react";
import { IMultilinePreviewRenderConfig, IMultilineRender } from "../interfaces/multiline";
import { MultilineRenderPreviewRenderConfig } from "../previewRenderConfig/MultilineRenderPreviewRenderConfig";
import { IAbstractField } from "../../interfaces/abstractField";
export declare class MultilineRender implements IMultilineRender {
    previewRenderConfig: MultilineRenderPreviewRenderConfig;
    FieldRender(props: {
        field: IAbstractField<string | null | undefined>;
        initialValue: string | null | undefined;
        onChange: (value: string) => void;
    }): React.ReactNode;
    PreviewRender(props: {
        field: IAbstractField<string | null | undefined>;
        value: string | null | undefined;
        renderConfig: IMultilinePreviewRenderConfig;
    }): React.ReactNode;
}
