import { IField } from "./field";
import { IEnumRender } from "../render/interfaces/enum";
import { IAsyncEnumRender } from "../render/interfaces/asyncEnum";
export interface IEnumField<Value extends readonly string[]> extends IField<Value[number], IEnumRender<Value>> {
    type: 'enum';
    getValues(): Value;
    setLabels(labels: Record<Value[number], string>): this;
    getLabels(): Record<Value[number], string> | null;
}
export interface IEnumAsyncField<Value extends readonly string[]> extends IField<Value[number], IAsyncEnumRender<Value>> {
    type: 'enumAsync';
    getValues(): Promise<{
        values: Value;
        labels: Record<Value[number], string> | null;
    }>;
}
