import {Field} from '@fields/impl/Field'
import {IArrayField} from '@fields/interfaces/array'
import {IField} from '@fields/interfaces/field'
import {ArrayRender} from "@fields/render/impl/ArrayRender";
import {IArrayRender} from "@fields/render/interfaces/array";


export class ArrayField<
	Value extends IField,
> extends Field<
	Value['_value'][],
	IArrayRender<Value['_value'][]>
> implements IArrayField<Value> {
	public readonly type = 'array' as const
	public readonly _value!: Value['_value'][]
	public readonly defaultRender = new ArrayRender<Value['_value'][]>() as IArrayRender<Value['_value'][]>
	
	private hasShowInPopover: boolean = false
	private _maxValue: number | null = null
	private _minValue: number | null = null
	
	constructor(
		private readonly _shape: Value,
	) {
		super()
	}
	
	public getShape() {
		return this._shape
	}
	
	public setHasShowInPopover(hasShowInPopover?: boolean): this {
		this.hasShowInPopover = typeof hasShowInPopover !== 'undefined' ? hasShowInPopover : true
		return this
	}
	
	public getShowInPopover(): boolean {
		return this.hasShowInPopover
	}
	
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
	
	public getInitialValue(): Value["_value"][] | null {
		const initialValue = super.getInitialValue();
		if (initialValue !== null) {
			return initialValue
		}
		if (this.isNullable()) {
			return null
		}
		return [this._shape.getInitialValue()]
	}
}

