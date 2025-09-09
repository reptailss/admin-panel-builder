import { IRender } from "../render/interfaces/render";
export declare abstract class Field<Value, Render extends IRender<Value> = IRender<Value>> {
    private _isOptional;
    private _isNullable;
    private _initialValue;
    private _name;
    private _icon;
    render: Render | null;
    abstract defaultRender: Render;
    setOptional(): this;
    setNullable(): this;
    isOptional(): boolean;
    isNullable(): boolean;
    getInitialValue(): Value | null;
    setInitialValue(value: Value): this;
    setName(name: string): this;
    getName(): string;
    setRender(render: Render): this;
    setIcon(icon: string): this;
    getIcon(): string | null;
    configureRender(cb: (render: Render) => void): this;
}
