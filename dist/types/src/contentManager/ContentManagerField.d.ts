import { IContentManagerField } from "./interfaces";
import { IField } from "../fields/interfaces/field";
export declare class ContentManagerField<Value extends object> implements IContentManagerField<Value> {
    private readonly fieldUrl;
    private readonly field;
    private name;
    private icon;
    constructor(fieldUrl: string, field: IField<Value>);
    getField(): IField<Value>;
    getFieldUrl(): string;
    getName(): string | null;
    setName(name: string): this;
    setIcon(icon: string): this;
    getIcon(): string | null;
}
