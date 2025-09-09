import { IField } from "../../interfaces/field";
import React from "react";
import { ILiteralPreviewRenderConfig, ILiteralRender } from "../interfaces/literal";
import { LiteralRenderPreviewRenderConfig } from "../previewRenderConfig/LiteralRenderPreviewRenderConfig";
export declare class LiteralRender<Value extends string> implements ILiteralRender<Value> {
    previewRenderConfig: LiteralRenderPreviewRenderConfig;
    FieldRender(props: {
        field: IField<Value | null | undefined>;
        initialValue: Value | null | undefined;
        onChange: (value: Value | undefined | null) => void;
    }): React.ReactNode;
    PreviewRender(props: {
        field: IField<Value | null | undefined>;
        value: Value | null | undefined;
        renderConfig: ILiteralPreviewRenderConfig;
    }): React.ReactNode;
}
