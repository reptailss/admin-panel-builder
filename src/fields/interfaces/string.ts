import {IField} from '@fields/interfaces/field'
import {IStringRender} from "@fields/render/interfaces/string";
import {IMultilineRender} from "@fields/render/interfaces/multiline";
import {IEditorRender} from "@fields/render/interfaces/editor";
import {IMediaValueProvider} from "@fields/interfaces/mediaValueProvider";


export interface IStringField extends IField<string, IStringRender> {
	type: 'string'
}

export interface IMultilineField extends IField<string, IMultilineRender> {
	type: 'multiline'
}


export interface IEditorField extends IField<string, IEditorRender> {
	type: 'editor'
	
	mediaProvider: IMediaValueProvider | null
	
	setMediaProvider: (mediaProvider: IMediaValueProvider) => this
}


