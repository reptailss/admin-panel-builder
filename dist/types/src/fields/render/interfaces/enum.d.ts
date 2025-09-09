import { IRender } from "./render";
import { RenderStyleValue } from "../types";
export interface IEnumRender<Value extends readonly string[]> extends IRender<Value[number], IEnumPreviewRenderConfig> {
}
export interface IEnumPreviewRenderConfig {
    setFontSize(fontSize: RenderStyleValue): this;
    getFontSize(): RenderStyleValue | null;
    setMargin(margin: RenderStyleValue): this;
    getMargin(): RenderStyleValue | null;
    setPadding(fontSize: RenderStyleValue): this;
    getPadding(): RenderStyleValue | null;
    setColor(color: RenderStyleValue): this;
    getColor(): RenderStyleValue | null;
}
