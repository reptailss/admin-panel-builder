import {IRender} from "@fields/render/interfaces/render";
import {RenderStyleValue} from "@fields/render/types";

export interface IDateRender<Value extends Date = Date> extends IRender<
	Value,
	IDatePreviewRenderConfig
> {
}


export interface IDatePreviewRenderConfig {
	setFontSize(fontSize: RenderStyleValue): this
	
	getFontSize(): RenderStyleValue | null
	
	setMargin(margin: RenderStyleValue): this
	
	getMargin(): RenderStyleValue | null
	
	setPadding(fontSize: RenderStyleValue): this
	
	getPadding(): RenderStyleValue | null
	
	setColor(color: RenderStyleValue): this
	
	getColor(): RenderStyleValue | null
	
	setFormatDate():this
	
	getFormatDate():boolean
}