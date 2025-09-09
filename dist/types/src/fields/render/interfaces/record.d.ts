import { IRender } from "./render";
export interface IRecordRender<Value extends Record<string, any>> extends IRender<Value, null> {
}
