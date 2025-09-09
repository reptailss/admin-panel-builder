import { IRender } from "../render/interfaces/render";
export interface IField<Value = any, Render extends IRender<Value> = IRender<Value>> {
    type: string;
    readonly _value: Value;
    defaultRender: Render;
    render: Render | null;
    setOptional(): IField<Value | undefined>;
    setNullable(): IField<Value | null>;
    isOptional(): boolean;
    isNullable(): boolean;
    getInitialValue(): Value | null;
    setInitialValue(value: Value): this;
    getName(): string;
    setName(name: string): this;
    getIcon(): string | null;
    setIcon(icon: string): this;
    setRender(render: Render): this;
    configureRender(cb: (render: Render) => void): this;
}
