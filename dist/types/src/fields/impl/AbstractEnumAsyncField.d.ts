import { Field } from "./Field";
import { IEnumAsyncField } from "../interfaces/enum";
import { AsyncEnumRender } from "../render/impl/AsyncEnumRender";
import { IAsyncEnumRender } from "../render/interfaces/asyncEnum";
export declare abstract class AbstractEnumAsyncField<Value extends readonly string[]> extends Field<Value[number], IAsyncEnumRender<Value>> implements IEnumAsyncField<Value> {
    readonly type: "enumAsync";
    readonly _value: Value[number];
    readonly defaultRender: AsyncEnumRender<readonly string[]>;
    abstract getValues(): Promise<{
        values: Value;
        labels: Record<Value[number], string> | null;
    }>;
}
