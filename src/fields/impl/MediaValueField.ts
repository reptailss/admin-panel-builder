import {Field} from '@fields/impl/Field'
import {IMediaValueProvider} from "@fields/interfaces/mediaValueProvider";
import {MediaPreviewRender} from "@fields/render/impl/MediaValueRender";
import {IMediaValueField} from "@fields/interfaces/media";
import {IMediaValueRender} from "@fields/render/interfaces/media";


export class MediaValueField extends Field<
	string,
	IMediaValueRender
> implements IMediaValueField {
	public readonly type = 'mediaValue' as const
	public readonly _value!: string
	public readonly defaultRender = new MediaPreviewRender()
	public readonly provider: IMediaValueProvider

	
	constructor(provider: IMediaValueProvider) {
		super();
		this.provider = provider;
	}
	
	private mediaType: 'image' | 'video' | null = null
	
	public setMediaType(value: "image" | "video"): this {
		this.mediaType = value
		return this
	}
	
	public getMediaType(): "image" | "video" | null {
		return this.mediaType
	}
	
	
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

