import { IStringField } from "../interfaces/string";
import { Field } from "./Field";
import { StringRender } from "../render/impl/StringRender";
import { IStringRender } from "../render/interfaces/string";
export declare class StringField extends Field<string, IStringRender> implements IStringField {
    readonly type: "string";
    readonly _value: string;
    readonly defaultRender: StringRender;
    getInitialValue(): string | null;
}
