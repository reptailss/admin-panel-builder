import {Field} from '@fields/impl/Field'
import {ExtendObjectFieldResult, ObjectFieldResult, ObjectValueField} from "@fields/interfaces/objectFields";
import {IObjectField} from "@fields/interfaces/object";


export class ObjectField<
	Shape extends ObjectValueField,
> extends Field<ObjectFieldResult<Shape>, any> implements IObjectField<Shape> {
	public readonly type = 'object' as const
	public readonly _value!: ObjectFieldResult<Shape>
	public readonly defaultRender = null as any
	
	private _shape: Shape = {} as Shape
	private hasShowInPopover: boolean = false
	
	constructor(
		private readonly initialShape: Shape,
	) {
		super()
		this._shape = initialShape
	}
	
	public partial(): IObjectField<Shape, Partial<ObjectFieldResult<Shape>>> {
		const newShape: ObjectValueField = {}
		for (const key in this._shape) {
			newShape[key as any] = this._shape[key].setOptional()
		}
		return new ObjectField(newShape) as unknown as IObjectField<Shape, Partial<ObjectFieldResult<Shape>>>
	}
	
	public merge<R extends ObjectValueField>(
		schema: IObjectField<R>,
	): IObjectField<
		ExtendObjectFieldResult<
			ObjectFieldResult<Shape>,
			ObjectFieldResult<R>
		>
	> {
		return new ObjectField({
			...this._shape,
			...schema.getShape()
		}) as IObjectField<
			ExtendObjectFieldResult<
				ObjectFieldResult<Shape>,
				ObjectFieldResult<R>
			>
		>
	}
	
	public getShape(): Shape {
		return this._shape
	}
	
	public setHasShowInPopover(hasShowInPopover?: boolean): this {
		this.hasShowInPopover = typeof hasShowInPopover !== 'undefined' ? hasShowInPopover : true
		return this
	}
	
	public getShowInPopover(): boolean {
		return this.hasShowInPopover
	}
	
	public clone(): IObjectField<Shape, ObjectFieldResult<Shape>> {
		const newObject = new ObjectField(this.initialShape) as IObjectField<Shape, ObjectFieldResult<Shape>>
		newObject
			.setName(this.getName())
			.setHasShowInPopover(this.getShowInPopover())
		
		const icon = this.getIcon()
		if (icon) {
			newObject.setIcon(icon)
		}
		if (this.isOptional()) {
			newObject.setOptional()
		}
		if (this.isNullable()) {
			newObject.setNullable()
		}
		if (this.render) {
			newObject.setRender(this.render)
		}
		const initialValue = this.getInitialValue()
		if(initialValue){
			newObject.setInitialValue(initialValue)
		}
		
		return newObject
	}
	
	public getInitialValue(): ObjectFieldResult<Shape> | null {
		const initialValue = super.getInitialValue()
		if(initialValue !== null){
			return initialValue
		}
		if (this.isNullable()) {
			return null
		}
		const shapeInitialValue:Shape = {} as Shape
		for(const key in this._shape){
			shapeInitialValue[key] = this._shape[key].getInitialValue()
		}
		
		return  shapeInitialValue
	}
}
