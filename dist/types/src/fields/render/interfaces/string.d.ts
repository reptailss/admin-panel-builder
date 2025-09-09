import { IRender } from "./render";
import { RenderStyleValue } from "../types";
export interface IStringRender<Value extends string = string> extends IRender<Value, IStringPreviewRenderConfig> {
}
export interface IStringPreviewRenderConfig {
    setFontSize(fontSize: RenderStyleValue): this;
    getFontSize(): RenderStyleValue | null;
    setMargin(margin: RenderStyleValue): this;
    getMargin(): RenderStyleValue | null;
    setPadding(fontSize: RenderStyleValue): this;
    getPadding(): RenderStyleValue | null;
    setColor(color: RenderStyleValue): this;
    getColor(): RenderStyleValue | null;
}
