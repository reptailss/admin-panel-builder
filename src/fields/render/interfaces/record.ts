import {IRender} from "@fields/render/interfaces/render";

export interface IRecordRender<Value extends Record<string, any>, > extends IRender<
	Value,
	null
> {
}

