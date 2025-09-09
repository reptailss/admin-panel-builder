import { IField } from "./field";
import { ILiteralRender } from "../render/interfaces/literal";
export interface ILiteralField<Value extends string> extends IField<Value, ILiteralRender<Value>> {
    type: 'literal';
    literalValue: Value;
    setHideFieldInRender(hide?: boolean): this;
    isHideFieldInRender(): boolean;
}
