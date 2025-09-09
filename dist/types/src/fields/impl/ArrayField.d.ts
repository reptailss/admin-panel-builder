import { Field } from "./Field";
import { IArrayField } from "../interfaces/array";
import { IField } from "../interfaces/field";
import { IArrayRender } from "../render/interfaces/array";
export declare class ArrayField<Value extends IField> extends Field<Value['_value'][], IArrayRender<Value['_value'][]>> implements IArrayField<Value> {
    private readonly _shape;
    readonly type: "array";
    readonly _value: Value['_value'][];
    readonly defaultRender: IArrayRender<Value["_value"][]>;
    private hasShowInPopover;
    private _maxValue;
    private _minValue;
    constructor(_shape: Value);
    getShape(): Value;
    setHasShowInPopover(hasShowInPopover?: boolean): this;
    getShowInPopover(): boolean;
    setMin(minValue: number): this;
    getMin(): number | null;
    setMax(maxValue: number): this;
    getMax(): number | null;
    getInitialValue(): Value["_value"][] | null;
}
