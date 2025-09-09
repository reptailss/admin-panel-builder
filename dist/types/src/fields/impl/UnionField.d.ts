import { Field } from "./Field";
import { IUnionField, IUnionFieldValue, UnionFieldValueInput } from "../interfaces/union";
import { IField } from "../interfaces/field";
export declare abstract class AbstractUnionFieldValue<Value> implements IUnionFieldValue<Value> {
    field: IField<Value>;
    constructor(field: IField<Value>);
    abstract math(value: unknown): value is Value;
}
export declare class UnionField<Value extends UnionFieldValueInput> extends Field<Value[number]['field']['_value'], any> implements IUnionField<Value> {
    private readonly shape;
    readonly type: "union";
    readonly _value: Value[number]['field']['_value'];
    readonly defaultRender: any;
    private hasShowInPopover;
    constructor(shape: Value);
    getShape(): Value;
    setHasShowInPopover(hasShowInPopover?: boolean): this;
    getShowInPopover(): boolean;
    getInitialValue(): Value[number]['field']['_value'] | null;
}
