import { IField } from "../../interfaces/field";
import React from "react";
import { INumberPreviewRenderConfig, INumberRender } from "../interfaces/number";
import { NumberRenderPreviewRenderConfig } from "../previewRenderConfig/NumberRenderPreviewRenderConfig";
export declare class NumberRender implements INumberRender {
    previewRenderConfig: NumberRenderPreviewRenderConfig;
    FieldRender(props: {
        field: IField<number | null | undefined>;
        initialValue: number | null | undefined;
        onChange: (value: number | null | undefined) => void;
    }): React.ReactNode;
    PreviewRender(props: {
        field: IField<number | null | undefined>;
        value: number | null | undefined;
        renderConfig: INumberPreviewRenderConfig;
    }): React.ReactNode;
}
