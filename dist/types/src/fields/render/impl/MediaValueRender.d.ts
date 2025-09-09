import React from "react";
import { MediaValueRenderPreviewRenderConfig } from "../previewRenderConfig/MediaValueRenderPreviewRenderConfig";
import { IMediaValueField } from "../../interfaces/media";
import { IMediaValuePreviewRenderConfig, IMediaValueRender } from "../interfaces/media";
export declare class MediaPreviewRender<Field extends IMediaValueField = IMediaValueField> implements IMediaValueRender {
    previewRenderConfig: MediaValueRenderPreviewRenderConfig;
    FieldRender(props: {
        field: Field;
        initialValue: string | null | undefined;
        onChange: (value: string) => void;
    }): React.ReactNode;
    PreviewRender(props: {
        field: Field;
        value: string | null | undefined;
        renderConfig: IMediaValuePreviewRenderConfig;
    }): React.ReactNode;
}
