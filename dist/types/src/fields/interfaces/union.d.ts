import { IField } from "./field";
import { IUnionRender } from "../render/interfaces/union";
export type UnionFieldValueInput = Readonly<[IUnionFieldValue, ...IUnionFieldValue[]]>;
export interface IUnionField<Value extends UnionFieldValueInput> extends IField<Value[number]['field']['_value'], IUnionRender<Value[number]['field']['_value']>> {
    type: 'union';
    getShape(): Value;
    setHasShowInPopover(hasShowInPopover?: boolean): this;
    getShowInPopover(): boolean;
}
export interface IUnionFieldValue<Value = any> {
    field: IField<Value>;
    math(value: unknown): value is Value;
}
