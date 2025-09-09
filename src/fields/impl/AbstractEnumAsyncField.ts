import {Field} from "@fields/impl/Field";
import {IEnumAsyncField} from "@fields/interfaces/enum";
import {AsyncEnumRender} from "@fields/render/impl/AsyncEnumRender";
import {IAsyncEnumRender} from "@fields/render/interfaces/asyncEnum";

export abstract class AbstractEnumAsyncField<Value extends readonly string[]> extends Field<
	Value[number],
	IAsyncEnumRender<Value>
> implements IEnumAsyncField<Value> {
	public readonly type = 'enumAsync' as const
	public readonly _value!: Value[number]
	public readonly defaultRender = new AsyncEnumRender()
	
	abstract getValues(): Promise<{
		values: Value
		labels: Record<Value[number], string> | null
	}>
	
	
}