import {Field} from '@fields/impl/Field'
import {IField} from '@fields/interfaces/field'
import {IRecordField, ValueRecordTypeField} from '@fields/interfaces/record'


export class RecordField<
	Value extends IField = IField
> extends Field<
	ValueRecordTypeField<string, Value['_value']>,
	any
> implements IRecordField<Value> {
	public readonly type = 'record' as const
	public readonly _value!: ValueRecordTypeField<string, Value['_value']>
	public readonly defaultRender = null as any
	
	private hasShowInPopover: boolean = false
	
	constructor(readonly value: Value) {
		super()
	}
	
	public setHasShowInPopover(hasShowInPopover?: boolean): this {
		this.hasShowInPopover = typeof hasShowInPopover !== 'undefined' ? hasShowInPopover : true
		return this
	}
	
	public getShowInPopover(): boolean {
		return this.hasShowInPopover
	}
	
	public getInitialValue(): ValueRecordTypeField<string, Value['_value']> | null {
		const initialValue = super.getInitialValue()
		if (initialValue !== null) {
			return initialValue
		}
		if (this.isNullable()) {
			return null
		}
		return {}
	}
}

