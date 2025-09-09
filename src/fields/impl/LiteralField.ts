import {Field} from '@fields/impl/Field'
import {ILiteralField} from "@fields/interfaces/literal";
import {LiteralRender} from "@fields/render/impl/LiteralRender";
import {ILiteralRender} from "@fields/render/interfaces/literal";


export class LiteralField<Value extends string> extends Field<
	Value,
	ILiteralRender<Value>
> implements ILiteralField<Value> {
	public readonly type = 'literal' as const
	public readonly _value!: Value
	public readonly defaultRender = new LiteralRender<Value>()
	private hideField: boolean = false
	
	constructor(public readonly literalValue: Value) {
		super();
	}
	
	public getInitialValue(): Value | null {
		const targetValue = super.getInitialValue()
		if (targetValue !== null) {
			return targetValue;
		}
		return this.literalValue;
	}
	
	public setHideFieldInRender(): this {
		this.hideField = true
		return this
	}
	
	public isHideFieldInRender() {
		return this.hideField
	}
}

