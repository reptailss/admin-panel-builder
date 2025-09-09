import {Field} from '@fields/impl/Field'
import {IEnumField} from '@fields/interfaces/enum'
import {EnumRender} from "@fields/render/impl/EnumRender";
import {IEnumRender} from "@fields/render/interfaces/enum";


export class EnumField<Value extends readonly string[]> extends Field<
	Value[number],
	IEnumRender<Value>
> implements IEnumField<Value> {
	public readonly type = 'enum' as const
	public readonly _value!: Value[number]
	public readonly defaultRender = new EnumRender()
	
	private labels: Record<Value[number], string> | null = null
	
	constructor(
		private readonly values: Value,
	) {
		super()
	}
	
	public getValues(): Value {
		return this.values
	}
	
	public setLabels(labels: Record<Value[number], string>): this {
		this.labels = labels
		return this
	}
	
	public getLabels(): Record<Value[number], string> | null {
		return this.labels
	}
	
	public getInitialValue(): string | null {
		const initialValue = super.getInitialValue();
		if (initialValue !== null) {
			return initialValue
		}
		if (this.isNullable()) {
			return null
		}
		return this.values[0]
	}
	
}



