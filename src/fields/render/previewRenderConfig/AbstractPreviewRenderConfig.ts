import {RenderStyleValue} from "@fields/render/types";


export class AbstractPreviewRenderConfig {
	private fontSize: RenderStyleValue | null = null
	private margin: RenderStyleValue | null = null
	private padding: RenderStyleValue | null = null
	private color: RenderStyleValue | null = null
	
	public setFontSize(fontSize: RenderStyleValue): this {
		this.fontSize = fontSize
		return this
	}
	
	public getFontSize(): RenderStyleValue | null {
		return this.fontSize
	}
	
	public setMargin(margin: RenderStyleValue): this {
		this.margin = margin
		return this
	}
	
	public getMargin(): RenderStyleValue | null {
		return this.margin
	}
	
	public setPadding(padding: RenderStyleValue): this {
		this.padding = padding
		return this
	}
	
	public getPadding(): RenderStyleValue | null {
		return this.padding
	}
	
	public setColor(color: RenderStyleValue): this {
		this.color = color
		return this
	}
	
	public getColor(): RenderStyleValue | null {
		return this.color
	}
}