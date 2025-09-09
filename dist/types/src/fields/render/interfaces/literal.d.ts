import { IRender } from "./render";
import { RenderStyleValue } from "../types";
export interface ILiteralRender<Value extends string> extends IRender<Value, ILiteralPreviewRenderConfig> {
}
export interface ILiteralPreviewRenderConfig {
    setFontSize(fontSize: RenderStyleValue): this;
    getFontSize(): RenderStyleValue | null;
    setMargin(margin: RenderStyleValue): this;
    getMargin(): RenderStyleValue | null;
    setPadding(fontSize: RenderStyleValue): this;
    getPadding(): RenderStyleValue | null;
    setColor(color: RenderStyleValue): this;
    getColor(): RenderStyleValue | null;
}
