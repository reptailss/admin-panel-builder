import {IRender} from "@fields/render/interfaces/render";

export interface IBooleanNumRender<Value extends 0 | 1 = 0 | 1> extends IRender<
	Value,
	null
> {
}


