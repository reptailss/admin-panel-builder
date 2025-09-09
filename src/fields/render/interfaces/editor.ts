import {IRender} from "@fields/render/interfaces/render";

export interface IEditorRender<Value extends string = string> extends IRender<
	Value,
	null
> {
}


