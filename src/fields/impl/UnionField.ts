import {Field} from '@fields/impl/Field'
import {IUnionField, IUnionFieldValue, UnionFieldValueInput,} from '@fields/interfaces/union'
import {IField} from "@fields/interfaces/field";


export abstract class AbstractUnionFieldValue<Value> implements IUnionFieldValue<Value> {
	
	constructor(public field: IField<Value>) {
	}
	
	abstract math(value: unknown): value is Value
}


export class UnionField<
	Value extends UnionFieldValueInput,
> extends Field<Value[number]['field']['_value'], any> implements IUnionField<Value> {
	public readonly type = 'union' as const
	public readonly _value!: Value[number]['field']['_value']
	public readonly defaultRender = null as any
	private hasShowInPopover: boolean = false
	
	constructor(
		private readonly shape: Value
	) {
		super()
		this.shape = shape
	}
	
	public getShape(): Value {
		return this.shape
	}
	
	public setHasShowInPopover(hasShowInPopover?: boolean): this {
		this.hasShowInPopover = typeof hasShowInPopover !== 'undefined' ? hasShowInPopover : true
		return this
	}
	
	public getShowInPopover(): boolean {
		return this.hasShowInPopover
	}
	
	public getInitialValue(): Value[number]['field']['_value'] | null {
		const initialValue = super.getInitialValue();
		if (initialValue !== null || !this.shape.length) {
			return initialValue
		}
		if (this.isNullable()) {
			return null
		}
		return this.shape[0].field.getInitialValue()
	}
	
}
