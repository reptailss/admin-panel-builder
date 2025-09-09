import { AbstractPreviewRenderConfig } from "./AbstractPreviewRenderConfig";
import { IDatePreviewRenderConfig } from "../interfaces/date";
export declare class DateRenderPreviewRenderConfig extends AbstractPreviewRenderConfig implements IDatePreviewRenderConfig {
    private formatDate;
    setFormatDate(): this;
    getFormatDate(): boolean;
}
