import { Field } from "./Field";
import { IBooleanNumField } from "../interfaces/booleanNum";
import { BooleanNumRender } from "../render/impl/BooleanNumRender";
import { IBooleanNumRender } from "../render/interfaces/booleanNum";
export declare class BooleanNumField extends Field<0 | 1, IBooleanNumRender> implements IBooleanNumField {
    readonly type: "booleanNum";
    readonly _value: 0 | 1;
    readonly defaultRender: BooleanNumRender;
    getInitialValue(): 0 | 1 | null;
}
