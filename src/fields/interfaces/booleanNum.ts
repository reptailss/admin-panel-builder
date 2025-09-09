import {IField} from '@fields/interfaces/field'
import {IBooleanNumRender} from "@fields/render/interfaces/booleanNum";

export interface IBooleanNumField extends IField<0 | 1, IBooleanNumRender> {
	type: 'booleanNum'
}
