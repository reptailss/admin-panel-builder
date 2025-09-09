import { IRender } from "./render";
import { RenderStyleValue } from "../types";
export interface IMultilineRender<Value extends string = string> extends IRender<Value, IMultilinePreviewRenderConfig> {
}
export interface IMultilinePreviewRenderConfig {
    setFontSize(fontSize: RenderStyleValue): this;
    getFontSize(): RenderStyleValue | null;
    setMargin(margin: RenderStyleValue): this;
    getMargin(): RenderStyleValue | null;
    setPadding(fontSize: RenderStyleValue): this;
    getPadding(): RenderStyleValue | null;
    setColor(color: RenderStyleValue): this;
    getColor(): RenderStyleValue | null;
}
