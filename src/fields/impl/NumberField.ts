import {Field} from '@fields/impl/Field'
import {INumberField} from '@fields/interfaces/number'
import {NumberRender} from "@fields/render/impl/NumberRender";
import {INumberRender} from "@fields/render/interfaces/number";


export class NumberField extends Field<number, INumberRender> implements INumberField {
	public readonly type = 'number' as const
	public readonly _value!: number
	public readonly defaultRender = new NumberRender()
	
	private _maxValue: number | null = null
	private _minValue: number | null = null
	
	public setMin(minValue: number): this {
		this._minValue = minValue
		return this
	}
	
	public getMin(): number | null {
		return this._minValue
	}
	
	public setMax(maxValue: number): this {
		this._maxValue = maxValue
		return this
	}
	
	public getMax(): number | null {
		return this._maxValue
	}
	
	public getInitialValue(): number | null {
		const initialValue = super.getInitialValue();
		if (initialValue !== null) {
			return initialValue
		}
		if (this.isNullable()) {
			return null
		}
		return 0
	}
	
}

