import {IStringField} from '@fields/interfaces/string'
import {Field} from '@fields/impl/Field'
import {StringRender} from "@fields/render/impl/StringRender";
import {IStringRender} from "@fields/render/interfaces/string";


export class StringField extends Field<
	string,
	IStringRender
> implements IStringField {
	public readonly type = 'string' as const
	public readonly _value!: string
	public readonly defaultRender = new StringRender()
	
	
	public getInitialValue(): string | null {
		const initialValue = super.getInitialValue();
		if (initialValue !== null) {
			return initialValue
		}
		if (this.isNullable()) {
			return null
		}
		return ''
	}
}

