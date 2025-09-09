import {Field} from '@fields/impl/Field'
import {IDateField} from '@fields/interfaces/date'
import {DateRender} from "@fields/render/impl/DateRender";
import {IDateRender} from "@fields/render/interfaces/date";


export class DateField extends Field<Date, IDateRender> implements IDateField {
	public readonly type = 'Date' as const
	public readonly _value!: Date
	public readonly defaultRender = new DateRender()
	
	
	public getInitialValue(): Date | null {
		const initialValue = super.getInitialValue();
		if (initialValue !== null) {
			return initialValue
		}
		if (this.isNullable()) {
			return null
		}
		return new Date()
	}
}

