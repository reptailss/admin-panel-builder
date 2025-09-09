import { Field } from "./Field";
import { ExtendObjectFieldResult, ObjectFieldResult, ObjectValueField } from "../interfaces/objectFields";
import { IObjectField } from "../interfaces/object";
export declare class ObjectField<Shape extends ObjectValueField> extends Field<ObjectFieldResult<Shape>, any> implements IObjectField<Shape> {
    private readonly initialShape;
    readonly type: "object";
    readonly _value: ObjectFieldResult<Shape>;
    readonly defaultRender: any;
    private _shape;
    private hasShowInPopover;
    constructor(initialShape: Shape);
    partial(): IObjectField<Shape, Partial<ObjectFieldResult<Shape>>>;
    merge<R extends ObjectValueField>(schema: IObjectField<R>): IObjectField<ExtendObjectFieldResult<ObjectFieldResult<Shape>, ObjectFieldResult<R>>>;
    getShape(): Shape;
    setHasShowInPopover(hasShowInPopover?: boolean): this;
    getShowInPopover(): boolean;
    clone(): IObjectField<Shape, ObjectFieldResult<Shape>>;
    getInitialValue(): ObjectFieldResult<Shape> | null;
}
