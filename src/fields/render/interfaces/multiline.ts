import {IRender} from "@fields/render/interfaces/render";
import {RenderStyleValue} from "@fields/render/types";

export interface IMultilineRender<Value extends string = string> extends IRender<
	Value,
	IMultilinePreviewRenderConfig
> {
}


export interface IMultilinePreviewRenderConfig {
	setFontSize(fontSize: RenderStyleValue): this
	
	getFontSize(): RenderStyleValue | null
	
	setMargin(margin: RenderStyleValue): this
	
	getMargin(): RenderStyleValue | null
	
	setPadding(fontSize: RenderStyleValue): this
	
	getPadding(): RenderStyleValue | null
	
	setColor(color: RenderStyleValue): this
	
	getColor(): RenderStyleValue | null
}