import {IEditorField} from '@fields/interfaces/string'
import {Field} from '@fields/impl/Field'
import {EditorRender} from "@fields/render/impl/EditorRender";
import {IEditorRender} from "@fields/render/interfaces/editor";
import {IMediaValueProvider} from "@fields/interfaces/mediaValueProvider";


export class EditorField extends Field<
	string,
	IEditorRender
> implements IEditorField {
	public readonly type = 'editor' as const
	public readonly _value!: string
	public mediaProvider: IMediaValueProvider | null = null
	public readonly defaultRender:IEditorRender = new EditorRender()
	
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
	
	public setMediaProvider(mediaProvider: IMediaValueProvider): this {
		this.mediaProvider = mediaProvider
		return this
	}
	
}

