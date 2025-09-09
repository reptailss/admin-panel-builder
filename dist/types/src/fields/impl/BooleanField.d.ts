import { Field } from "./Field";
import { IBooleanField } from "../interfaces/boolean";
import { BooleanRender } from "../render/impl/BooleanRender";
import { IBooleanRender } from "../render/interfaces/boolean";
export declare class BooleanField extends Field<boolean, IBooleanRender> implements IBooleanField {
    readonly type: "boolean";
    readonly _value: boolean;
    readonly defaultRender: BooleanRender;
    getInitialValue(): boolean | null;
}
