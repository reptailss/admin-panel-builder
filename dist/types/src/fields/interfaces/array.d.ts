import { IField } from "./field";
import { IArrayRender } from "../render/interfaces/array";
export interface IArrayField<Value extends IField> extends IField<Value['_value'][], IArrayRender<Value['_value'][]>> {
    type: 'array';
    getShape(): Value;
    setHasShowInPopover(hasShowInPopover?: boolean): this;
    getShowInPopover(): boolean;
    setMax(max: number): this;
    getMax(): number | null;
    setMin(min: number): this;
    getMin(): number | null;
}
