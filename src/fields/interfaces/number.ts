import {IField} from '@fields/interfaces/field'
import {INumberRender} from "@fields/render/interfaces/number";

export interface INumberField extends IField<number, INumberRender> {
	type: 'number'
	
	setMax(max: number): this
	
	getMax(): number | null
	
	setMin(min: number): this
	
	getMin(): number | null
}
