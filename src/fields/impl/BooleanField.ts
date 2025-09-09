import {Field} from '@fields/impl/Field'
import {IBooleanField} from '@fields/interfaces/boolean'
import {BooleanRender} from "@fields/render/impl/BooleanRender";
import {IBooleanRender} from "@fields/render/interfaces/boolean";


export class BooleanField extends Field<boolean, IBooleanRender> implements IBooleanField {
	public readonly type = 'boolean' as const
	public readonly _value!: boolean
	public readonly defaultRender = new BooleanRender()
	
	
	public getInitialValue(): boolean | null {
		const initialValue = super.getInitialValue();
		if (initialValue !== null) {
			return initialValue
		}
		if (this.isNullable()) {
			return null
		}
		return false
	}
	
}

