import { Field } from "./Field";
import { IEnumField } from "../interfaces/enum";
import { EnumRender } from "../render/impl/EnumRender";
import { IEnumRender } from "../render/interfaces/enum";
export declare class EnumField<Value extends readonly string[]> extends Field<Value[number], IEnumRender<Value>> implements IEnumField<Value> {
    private readonly values;
    readonly type: "enum";
    readonly _value: Value[number];
    readonly defaultRender: EnumRender<readonly string[]>;
    private labels;
    constructor(values: Value);
    getValues(): Value;
    setLabels(labels: Record<Value[number], string>): this;
    getLabels(): Record<Value[number], string> | null;
    getInitialValue(): string | null;
}
