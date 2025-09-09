import {IRender} from "@fields/render/interfaces/render";

export abstract class Field<Value,Render extends IRender<Value> = IRender<Value>> {
	private _isOptional: boolean = false
	private _isNullable: boolean = false
	private _initialValue: Value | null = null
	private _name: string = ''
	private _icon: string | null = ''
	public render: Render | null = null
	
	abstract defaultRender: Render
	
	public setOptional(): this {
		this._isOptional = true
		return this
	}
	
	public setNullable(): this {
		this._isNullable = true
		return this
	}
	
	public isOptional(): boolean {
		return this._isOptional
	}
	
	public isNullable(): boolean {
		return this._isNullable
	}
	
	public getInitialValue(): Value | null {
		return this._initialValue
	}
	
	public setInitialValue(value: Value): this {
		this._initialValue = value
		return this
	}
	
	public setName(name: string): this {
		this._name = name
		return this
	}
	
	public getName(): string {
		return this._name
	}
	
	public setRender(render: Render): this {
		this.render = render
		return this
	}
	
	public setIcon(icon: string): this {
		this._icon = icon
		return this
	}
	
	public getIcon(): string | null {
		return this._icon
	}
	
	public configureRender(cb: (render: Render) => void): this {
		cb(this.render || this.defaultRender)
		return this
	}
}