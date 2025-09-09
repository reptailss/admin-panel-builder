import {IMediaValueProvider} from "@fields/interfaces/mediaValueProvider";
import {IAbstractField} from "@fields/interfaces/abstractField";
import {IMediaValueRender} from "@fields/render/interfaces/media";

export interface IMediaValueField<Value extends string = string> extends IAbstractField<Value> {
	type: 'mediaValue'
	
	provider: IMediaValueProvider
	
	defaultRender: IMediaValueRender<Value>
	
	setRender(
		render: IMediaValueRender<Value>
	): this
	
	configureRender(cb: (render: IMediaValueRender<Value>) => void): this
	
	setMediaType(value: 'image' | 'video'): this
	
	getMediaType(): 'image' | 'video' | null
}


