import { Field } from "./Field";
import { IMediaValueProvider } from "../interfaces/mediaValueProvider";
import { MediaPreviewRender } from "../render/impl/MediaValueRender";
import { IMediaValueField } from "../interfaces/media";
import { IMediaValueRender } from "../render/interfaces/media";
export declare class MediaValueField extends Field<string, IMediaValueRender> implements IMediaValueField {
    readonly type: "mediaValue";
    readonly _value: string;
    readonly defaultRender: MediaPreviewRender<IMediaValueField<string>>;
    readonly provider: IMediaValueProvider;
    constructor(provider: IMediaValueProvider);
    private mediaType;
    setMediaType(value: "image" | "video"): this;
    getMediaType(): "image" | "video" | null;
    getInitialValue(): string | null;
}
