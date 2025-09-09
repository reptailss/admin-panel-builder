import {AbstractPreviewRenderConfig} from "@fields/render/previewRenderConfig/AbstractPreviewRenderConfig";
import {IDatePreviewRenderConfig} from "@fields/render/interfaces/date";

export class DateRenderPreviewRenderConfig extends AbstractPreviewRenderConfig implements IDatePreviewRenderConfig {
	
	private formatDate: boolean = false
	
	public setFormatDate(): this {
		this.formatDate = true
		return this
	}
	
	public getFormatDate(): boolean {
		return this.formatDate
	}
}