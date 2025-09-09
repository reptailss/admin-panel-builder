import {Field} from '@fields/impl/Field'
import {IBooleanNumField} from '@fields/interfaces/booleanNum'
import {BooleanNumRender} from "@fields/render/impl/BooleanNumRender";
import {IBooleanNumRender} from "@fields/render/interfaces/booleanNum";


export class BooleanNumField extends Field<0 | 1, IBooleanNumRender> implements IBooleanNumField {
	public readonly type = 'booleanNum' as const
	public readonly _value!: 0 | 1
	public readonly defaultRender = new BooleanNumRender()
	
	
	public getInitialValue(): 0 | 1 | null {
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

