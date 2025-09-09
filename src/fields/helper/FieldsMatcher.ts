import {IField} from "@fields/interfaces/field";

import {IStringField} from "@fields/interfaces/string";
import {IArrayField} from "@fields/interfaces/array";
import {IBooleanField} from "@fields/interfaces/boolean";
import {IBooleanNumField} from "@fields/interfaces/booleanNum";
import {IDateField} from "@fields/interfaces/date";
import {IEnumField} from "@fields/interfaces/enum";
import {INumberField} from "@fields/interfaces/number";
import {IRecordField} from "@fields/interfaces/record";
import {IUnionField, UnionFieldValueInput} from "@fields/interfaces/union";
import {IObjectField} from "@fields/interfaces/object";
import {ILiteralField} from "@fields/interfaces/literal";

export class FieldsMatcher {
	
	
	static isArray<Value extends IField, >(field: IField): field is IArrayField<Value> {
		return field.type === 'array'
	}
	
	static isBoolean(field: IField): field is IBooleanField {
		return field.type === 'boolean'
	}
	
	static isBooleanNum(field: IField): field is IBooleanNumField {
		return field.type === 'booleanNum'
	}
	
	static isDate(field: IField): field is IDateField {
		return field.type === 'date'
	}
	
	static isEnum<Value extends readonly string[]>(field: IField): field is IEnumField<Value> {
		return field.type === 'enum'
	}
	
	static isNumber(field: IField): field is INumberField {
		return field.type === 'number'
	}
	
	static isObject<Value extends object, >(field: IField): field is IObjectField<any, Value> {
		return field.type === 'object'
	}
	
	static isRecord<Value extends IField = IField>(field: IField): field is IRecordField<Value> {
		return field.type === 'record'
	}
	
	static isString(field: IField): field is IStringField {
		return field.type === 'string'
	}
	
	static isUnion<Value extends UnionFieldValueInput>(field: IField): field is IUnionField<Value> {
		return field.type === 'union'
	}
	
	static isLiteral<Value extends string>(field: IField): field is ILiteralField<Value> {
		return field.type === 'literal'
	}
}