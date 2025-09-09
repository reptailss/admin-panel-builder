import { IMultilineField } from "../interfaces/string";
import { Field } from "./Field";
import { MultilineRender } from "../render/impl/MultilineRender";
import { IMultilineRender } from "../render/interfaces/multiline";
export declare class MultilineField extends Field<string, IMultilineRender> implements IMultilineField {
    readonly type: "multiline";
    readonly _value: string;
    readonly defaultRender: MultilineRender;
    getInitialValue(): string | null;
}
