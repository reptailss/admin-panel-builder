import { Field } from "./Field";
import { IField } from "../interfaces/field";
import { IRecordField, ValueRecordTypeField } from "../interfaces/record";
export declare class RecordField<Value extends IField = IField> extends Field<ValueRecordTypeField<string, Value['_value']>, any> implements IRecordField<Value> {
    readonly value: Value;
    readonly type: "record";
    readonly _value: ValueRecordTypeField<string, Value['_value']>;
    readonly defaultRender: any;
    private hasShowInPopover;
    constructor(value: Value);
    setHasShowInPopover(hasShowInPopover?: boolean): this;
    getShowInPopover(): boolean;
    getInitialValue(): ValueRecordTypeField<string, Value['_value']> | null;
}
