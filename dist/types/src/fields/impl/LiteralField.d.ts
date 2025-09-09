import { Field } from "./Field";
import { ILiteralField } from "../interfaces/literal";
import { LiteralRender } from "../render/impl/LiteralRender";
import { ILiteralRender } from "../render/interfaces/literal";
export declare class LiteralField<Value extends string> extends Field<Value, ILiteralRender<Value>> implements ILiteralField<Value> {
    readonly literalValue: Value;
    readonly type: "literal";
    readonly _value: Value;
    readonly defaultRender: LiteralRender<Value>;
    private hideField;
    constructor(literalValue: Value);
    getInitialValue(): Value | null;
    setHideFieldInRender(): this;
    isHideFieldInRender(): boolean;
}
