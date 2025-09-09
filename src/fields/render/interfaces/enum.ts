import {IRender} from "@fields/render/interfaces/render";
import {RenderStyleValue} from "@fields/render/types";

export interface IEnumRender<Value extends readonly string[]> extends IRender<
	Value[number],
	IEnumPreviewRenderConfig
> {
}


export interface IEnumPreviewRenderConfig {
	setFontSize(fontSize: RenderStyleValue): this
	
	getFontSize(): RenderStyleValue | null
	
	setMargin(margin: RenderStyleValue): this
	
	getMargin(): RenderStyleValue | null
	
	setPadding(fontSize: RenderStyleValue): this
	
	getPadding(): RenderStyleValue | null
	
	setColor(color: RenderStyleValue): this
	
	getColor(): RenderStyleValue | null
}