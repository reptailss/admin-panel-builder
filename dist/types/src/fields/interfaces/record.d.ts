import { IField } from "./field";
import { IRecordRender } from "../render/interfaces/record";
export type KeySchemaRecordField = IField<string | number | symbol>;
declare const BRAND: unique symbol;
type BRAND<T extends string | number | symbol> = {
    [BRAND]: {
        [k in T]: true;
    };
};
export type ValueRecordTypeField<K extends string | number | symbol, V> = [
    string
] extends [K] ? Record<K, V> : [number] extends [K] ? Record<K, V> : [symbol] extends [K] ? Record<K, V> : [BRAND<string | number | symbol>] extends [K] ? Record<K, V> : Partial<Record<K, V>>;
export interface IRecordField<Value extends IField = IField> extends IField<ValueRecordTypeField<string, Value['_value']>, IRecordRender<ValueRecordTypeField<string, Value['_value']>>> {
    type: 'record';
    setHasShowInPopover(hasShowInPopover?: boolean): this;
    getShowInPopover(): boolean;
}
export {};
