import { Field } from "./Field";
import { INumberField } from "../interfaces/number";
import { NumberRender } from "../render/impl/NumberRender";
import { INumberRender } from "../render/interfaces/number";
export declare class NumberField extends Field<number, INumberRender> implements INumberField {
    readonly type: "number";
    readonly _value: number;
    readonly defaultRender: NumberRender;
    private _maxValue;
    private _minValue;
    setMin(minValue: number): this;
    getMin(): number | null;
    setMax(maxValue: number): this;
    getMax(): number | null;
    getInitialValue(): number | null;
}
