import { IField } from "./field";
import { ExtendObjectFieldResult, ObjectFieldResult, ObjectValueField } from "./objectFields";
import { IObjectRender } from "../render/interfaces/object";
export interface IObjectField<Shape extends ObjectValueField, Value = ObjectFieldResult<Shape>> extends IField<Value, IObjectRender<Value>> {
    type: 'object';
    partial(): IObjectField<Shape, Partial<Value>>;
    merge<R extends ObjectValueField>(schema: IObjectField<R>): IObjectField<ExtendObjectFieldResult<ObjectFieldResult<Shape>, ObjectFieldResult<R>>>;
    getShape(): Shape;
    setHasShowInPopover(hasShowInPopover?: boolean): this;
    getShowInPopover(): boolean;
    clone(): IObjectField<Shape, Value>;
}
