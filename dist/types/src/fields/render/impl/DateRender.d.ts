import React from "react";
import { IDateRender } from "../interfaces/date";
import { DateRenderPreviewRenderConfig } from "../previewRenderConfig/DateRenderPreviewRenderConfig";
import { IAbstractField } from "../../interfaces/abstractField";
export declare class DateRender implements IDateRender {
    previewRenderConfig: DateRenderPreviewRenderConfig;
    FieldRender(props: {
        field: IAbstractField<Date | null | undefined>;
        initialValue: Date | null | undefined;
        onChange: (value: Date) => void;
    }): React.ReactNode;
    PreviewRender(props: {
        field: IAbstractField<Date | null | undefined>;
        value: Date | null | undefined;
        renderConfig: DateRenderPreviewRenderConfig;
    }): React.ReactNode;
}
