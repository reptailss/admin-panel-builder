import { IField } from "./field";
import { IStringRender } from "../render/interfaces/string";
import { IMultilineRender } from "../render/interfaces/multiline";
import { IEditorRender } from "../render/interfaces/editor";
import { IMediaValueProvider } from "./mediaValueProvider";
export interface IStringField extends IField<string, IStringRender> {
    type: 'string';
}
export interface IMultilineField extends IField<string, IMultilineRender> {
    type: 'multiline';
}
export interface IEditorField extends IField<string, IEditorRender> {
    type: 'editor';
    mediaProvider: IMediaValueProvider | null;
    setMediaProvider: (mediaProvider: IMediaValueProvider) => this;
}
