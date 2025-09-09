import {IRender} from "@fields/render/interfaces/render";

export interface IMediaValueRender<
	Value extends string = string,
> extends IRender<
	Value,
	IMediaValuePreviewRenderConfig
> {
}


export interface IMediaValuePreviewRenderConfig {

}