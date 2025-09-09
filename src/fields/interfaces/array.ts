import {IField} from '@fields/interfaces/field'
import {IArrayRender} from "@fields/render/interfaces/array";

export interface IArrayField<
	Value extends IField,
> extends IField<
	Value['_value'][],
	IArrayRender<Value['_value'][]>
> {
	type: 'array'
	
	getShape(): Value
	
	setHasShowInPopover(hasShowInPopover?: boolean): this
	
	getShowInPopover(): boolean
	
	setMax(max: number): this
	
	getMax(): number | null
	
	setMin(min: number): this
	
	getMin(): number | null
	
}
