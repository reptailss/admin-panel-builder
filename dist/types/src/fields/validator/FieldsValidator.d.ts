import { IField } from "../interfaces/field";
import { ErrorValue } from "./types";
type Result<Field extends IField> = {
    errors: ErrorValue[];
    error: boolean;
    data: Field['_value'] | null;
};
export declare class FieldsValidator {
    validate<Field extends IField>(field: Field, value: unknown, path: string | null, hasStrict?: boolean): Result<Field>;
    private validateObject;
    private validateUnion;
    private validateArray;
    private validatePrimitive;
    private validateLiteral;
    private buildReqFieldErrorValue;
    private buildErrorValueByField;
}
export {};
