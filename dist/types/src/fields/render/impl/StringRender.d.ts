import { IField } from "../../interfaces/field";
import React from "react";
import { StringRenderPreviewRenderConfig } from "../previewRenderConfig/StringRenderPreviewRenderConfig";
import { IStringPreviewRenderConfig, IStringRender } from "../interfaces/string";
export declare class StringRender implements IStringRender {
    previewRenderConfig: StringRenderPreviewRenderConfig;
    FieldRender(props: {
        field: IField<string | null | undefined>;
        initialValue: string | null | undefined;
        onChange: (value: string | undefined | null) => void;
    }): React.ReactNode;
    PreviewRender(props: {
        field: IField<string | null | undefined>;
        value: string | null | undefined;
        renderConfig: IStringPreviewRenderConfig;
    }): React.ReactNode;
}
