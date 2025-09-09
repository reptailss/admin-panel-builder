export interface IAbstractField<
	Value = any,
> {
	type: string
	
	readonly _value: Value;
	
	setOptional(): IAbstractField<Value | undefined>
	
	setNullable(): IAbstractField<Value | null>
	
	isOptional(): boolean
	
	isNullable(): boolean
	
	getInitialValue(): Value | null
	
	setInitialValue(value: Value): this
	
	getName(): string
	
	setName(name: string): this
	
	getIcon(): string | null
	
	setIcon(icon: string): this
	
}

