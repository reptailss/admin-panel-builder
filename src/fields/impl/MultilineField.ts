import {IMultilineField} from '@fields/interfaces/string'
import {Field} from '@fields/impl/Field'
import {MultilineRender} from "@fields/render/impl/MultilineRender";
import {IMultilineRender} from "@fields/render/interfaces/multiline";


export class MultilineField extends Field<string, IMultilineRender> implements IMultilineField {
	public readonly type = 'multiline' as const
	public readonly _value!: string
	public readonly defaultRender = new MultilineRender()
	
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

