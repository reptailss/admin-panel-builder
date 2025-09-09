import { IField } from "../interfaces/field";
import { IStringField } from "../interfaces/string";
import { IArrayField } from "../interfaces/array";
import { IBooleanField } from "../interfaces/boolean";
import { IBooleanNumField } from "../interfaces/booleanNum";
import { IDateField } from "../interfaces/date";
import { IEnumField } from "../interfaces/enum";
import { INumberField } from "../interfaces/number";
import { IRecordField } from "../interfaces/record";
import { IUnionField, UnionFieldValueInput } from "../interfaces/union";
import { IObjectField } from "../interfaces/object";
import { ILiteralField } from "../interfaces/literal";
export declare class FieldsMatcher {
    static isArray<Value extends IField>(field: IField): field is IArrayField<Value>;
    static isBoolean(field: IField): field is IBooleanField;
    static isBooleanNum(field: IField): field is IBooleanNumField;
    static isDate(field: IField): field is IDateField;
    static isEnum<Value extends readonly string[]>(field: IField): field is IEnumField<Value>;
    static isNumber(field: IField): field is INumberField;
    static isObject<Value extends object>(field: IField): field is IObjectField<any, Value>;
    static isRecord<Value extends IField = IField>(field: IField): field is IRecordField<Value>;
    static isString(field: IField): field is IStringField;
    static isUnion<Value extends UnionFieldValueInput>(field: IField): field is IUnionField<Value>;
    static isLiteral<Value extends string>(field: IField): field is ILiteralField<Value>;
}
