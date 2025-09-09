import { IRender } from "./render";
import { RenderStyleValue } from "../types";
export interface INumberRender<Value extends number = number> extends IRender<Value, INumberPreviewRenderConfig> {
}
export interface INumberPreviewRenderConfig {
    setFontSize(fontSize: RenderStyleValue): this;
    getFontSize(): RenderStyleValue | null;
    setMargin(margin: RenderStyleValue): this;
    getMargin(): RenderStyleValue | null;
    setPadding(fontSize: RenderStyleValue): this;
    getPadding(): RenderStyleValue | null;
    setColor(color: RenderStyleValue): this;
    getColor(): RenderStyleValue | null;
}
