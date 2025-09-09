import {IField} from "@fields/interfaces/field";
import {ErrorValue} from "@fields/validator/types";
import {IObjectField} from "@fields/interfaces/object";
import {FieldsMatcher} from "@fields/helper/FieldsMatcher";
import {IArrayField} from "@fields/interfaces/array";
import {ILiteralField} from "@fields/interfaces/literal";
import {IUnionField, IUnionFieldValue} from "@fields/interfaces/union";

type Result<Field extends IField> = {
	errors: ErrorValue[]
	error: boolean
	data: Field['_value'] | null
}

export class FieldsValidator {
	
	public validate<Field extends IField>(
		field: Field,
		value: unknown,
		path: string | null,
		hasStrict?: boolean
	): Result<Field> {
		if (FieldsMatcher.isObject(field)) {
			return this.validateObject(field, value, path, hasStrict)
		}
		if (FieldsMatcher.isArray(field)) {
			return this.validateArray(field, value, path, hasStrict)
		}
		if (FieldsMatcher.isUnion(field)) {
			return this.validateUnion(field, value, path, hasStrict)
		}
		
		if (FieldsMatcher.isLiteral(field)) {
			return this.validateLiteral(field, value, path)
		}
		return this.validatePrimitive(field, value, path)
	}
	
	private validateObject<Field extends IObjectField<any>>(
		field: Field,
		value: unknown,
		path: string | null,
		hasStrict?: boolean
	): Result<Field> {
		
		if (value === null && hasStrict) {
			if (!field.isNullable()) {
				return this.buildReqFieldErrorValue(field, path)
			}
			return {
				data: value,
				error: false,
				errors: []
			}
		}
		if (typeof value === 'undefined' && hasStrict) {
			if (!field.isOptional()) {
				return this.buildReqFieldErrorValue(field, path)
			}
			return {
				data: value as unknown as Field['_value'],
				error: false,
				errors: []
			}
		}
		if (typeof value !== 'object') {
			return this.buildReqFieldErrorValue(field, path)
		}
		const targetValue = value !== null ? value : {}
		const newData: Field['_value'] = {}
		const shape = field.getShape()
		const errors: ErrorValue[] = []
		for (const key in shape) {
			const childField = shape[key]
			const res = this.validate(
				childField,
				targetValue[key],
				path ? `${path}.${childField.getName()}` : childField.getName(),
				hasStrict
			)
			newData[key as keyof Field['_value']] = res.data
			if (res.error && res.errors.length) {
				errors.push(...res.errors)
			}
		}
		return {
			data: newData,
			errors,
			error: errors.length >= 1
		} as Result<Field>
	}
	
	private validateUnion<Field extends IUnionField<any>>(
		field: Field,
		value: unknown,
		path: string | null,
		hasStrict?: boolean
	): Result<Field> {
		const shapes: IUnionFieldValue[] = field.getShape()
		const errors: ErrorValue[] = []
		
		const targetShape = shapes.find((shape) => shape.math(value))
		if (targetShape) {
			return this.validate(targetShape.field, value, path, hasStrict) as Result<Field>
		}
		for (const shape of shapes) {
			const res = this.validate(shape.field, value, path, hasStrict)
			if (!res.error) {
				return res as Result<Field>
			}
			if (errors.length) {
				errors.push('or')
			}
			errors.push(...res.errors)
		}
		return {
			data: null,
			errors,
			error: true
		}
		
	}
	
	private validateArray<Field extends IArrayField<any>>(
		field: Field,
		value: unknown,
		path: string | null,
		hasStrict?: boolean
	): Result<Field> {
		
		
		const targetValue = Array.isArray(value) ? value : []
		const errors: ErrorValue[] = []
		const data: any[] = []
		
		targetValue.forEach((item, index) => {
			const res = this.validate(
				field.getShape(),
				item,
				path ? `${path}[${index}]` : index.toString(),
				hasStrict
			)
			if (!res.error) {
				data.push(res.data)
			}
			if (res.errors.length) {
				errors.push(...res.errors)
			}
		})
		
		if (errors.length) {
			return {
				data: data,
				errors,
				error: true
			}
		}
		if (hasStrict) {
			const max = field.getMax()
			if (max && data.length > max) {
				return {
					errors: [this.buildErrorValueByField(field, `Максимальна кількість елементів: ${max}`, path)],
					error: true,
					data
				}
			}
			const min = field.getMin()
			if (min && data.length < min) {
				return {
					errors: [this.buildErrorValueByField(field, `Мінімальна кількість елементів: ${min}`, path)],
					error: true,
					data
				}
			}
		}
		
		return {
			data: data,
			errors,
			error: true
		}
	}
	
	private validatePrimitive<Field extends IField>(field: Field, value: unknown, path: string | null): Result<Field> {
		if (value === null) {
			if (!field.isNullable()) {
				return this.buildReqFieldErrorValue(field, path)
			}
			return {
				data: null,
				errors: [],
				error: false
			}
		}
		if (typeof value === 'undefined') {
			if (!field.isOptional()) {
				return this.buildReqFieldErrorValue(field, path)
			}
			return {
				data: null,
				errors: [],
				error: false
			}
		}
		if (FieldsMatcher.isNumber(field)) {
			if (typeof value !== 'number' || isNaN(value)) {
				return {
					data: null,
					errors: [
						this.buildErrorValueByField(field, 'Має бути числом', path)
					],
					error: true
				}
			}
			const max = field.getMax()
			if (max && parseInt(value as any) > max) {
				return {
					data: null,
					errors: [
						this.buildErrorValueByField(field, `Не може бути більшим за ${max}`, path)
					],
					error: true
				}
			}
			
			const min = field.getMin()
			if (min && parseInt(value as any) < min) {
				return {
					data: null,
					errors: [
						this.buildErrorValueByField(field, `Не може бути меншим за ${min}`, path)
					],
					error: true
				}
			}
			
			return {
				data: parseInt(value as any),
				errors: [],
				error: false,
			}
		}
		
		if (typeof value !== 'string') {
			return {
				data: null,
				errors: [
					this.buildErrorValueByField(field, 'Обовязкове поле', path)
				],
				error: true
			}
		}
		
		return {
			data: value,
			errors: [],
			error: false
		}
	}
	
	
	private validateLiteral<Field extends ILiteralField<any>>(field: Field, value: unknown, path: string | null): Result<Field> {
		if (value === null) {
			if (!field.isNullable()) {
				return this.buildReqFieldErrorValue(field, path)
			}
			return {
				data: null,
				errors: [],
				error: false
			}
		}
		if (typeof value === 'undefined') {
			if (!field.isOptional()) {
				return this.buildReqFieldErrorValue(field, path)
			}
			return {
				data: null,
				errors: [],
				error: false
			}
		}
		
		if (typeof value !== 'string') {
			return {
				data: null,
				errors: [
					this.buildErrorValueByField(field, 'Обовязкове поле', path)
				],
				error: true
			}
		}
		
		if (value !== field.literalValue) {
			return {
				data: null,
				errors: [
					this.buildErrorValueByField(field, `Значення повинно бути:${field.literalValue}`, path)
				],
				error: true
			}
		}
		
		return {
			data: value,
			errors: [],
			error: false
		}
	}
	
	private buildReqFieldErrorValue<Field extends IField>(field: IField, path: string | null): Result<Field> {
		return {
			data: null,
			errors: [
				this.buildErrorValueByField(field, 'Обовязкове поле', path)
			],
			error: true
		}
	}
	
	private buildErrorValueByField(field: IField, message: string, path: string | null): ErrorValue {
		const name = field.getName()
		const pathArray = path ? path.split('.') : []
		const nameStr = name !== pathArray[pathArray.length - 1] ? `${name} : ` : ''
		return path ? {
			key: path,
			message: `${nameStr}${message}.`
		} : `${nameStr}${message}.`
	}
}