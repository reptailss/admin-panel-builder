import {IContentManagerField} from "@contentManager/interfaces";
import {IField} from "@fields/interfaces/field";


export class ContentManagerField<Value extends object> implements IContentManagerField<Value> {
	private name: string | null = null
	private icon: string | null = null
	
	constructor(private readonly fieldUrl: string, private readonly field: IField<Value>) {
	}
	
	public getField(): IField<Value> {
		return this.field
	}
	
	public getFieldUrl(): string {
		return this.fieldUrl
	}
	
	public getName(): string | null {
		return this.name
	}
	
	public setName(name: string): this {
		this.name = name
		return this
	}
	
	public setIcon(icon: string) {
		this.icon = icon
		return this
	}
	
	public getIcon(): string | null {
		return this.icon
	}
}

