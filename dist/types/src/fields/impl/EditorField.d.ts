import { IEditorField } from "../interfaces/string";
import { Field } from "./Field";
import { IEditorRender } from "../render/interfaces/editor";
import { IMediaValueProvider } from "../interfaces/mediaValueProvider";
export declare class EditorField extends Field<string, IEditorRender> implements IEditorField {
    readonly type: "editor";
    readonly _value: string;
    mediaProvider: IMediaValueProvider | null;
    readonly defaultRender: IEditorRender;
    getInitialValue(): string | null;
    setMediaProvider(mediaProvider: IMediaValueProvider): this;
}
