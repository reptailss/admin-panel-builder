import {IField} from '@fields/interfaces/field'
import {IStringRender} from "@fields/render/interfaces/string";
import {IMultilineRender} from "@fields/render/interfaces/multiline";
import {IEditorRender} from "@fields/render/interfaces/editor";
import {ILiteralRender} from "@fields/render/interfaces/literal";


export interface ILiteralField<Value extends string> extends IField<Value, ILiteralRender<Value>> {
	type: 'literal'
	
	literalValue:Value
	
	setHideFieldInRender(hide?:boolean):this
	
	isHideFieldInRender():boolean
}
