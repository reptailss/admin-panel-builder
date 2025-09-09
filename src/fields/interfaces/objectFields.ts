import {IField} from "@fields/interfaces/field";

export type ExtendObjectFieldResult<A, B> = {
	[K in keyof A as K extends keyof B ? never : K]: A[K];
} & {
	[K in keyof B]: B[K];
};

export type ObjectValueField = { [k: string]: IField };


type identity<T> = T;

type flatten<T> = identity<{ [k in keyof T]: T[k] }>;

type requiredKeys<T extends object> = {
	[k in keyof T]: undefined extends T[k] ? never : k;
}[keyof T];

type optionalKeys<T extends object> = {
	[k in keyof T]: undefined extends T[k] ? k : never;
}[keyof T];

type addQuestionMarks<T extends object, _O = any> = {
	[K in requiredKeys<T>]: T[K];
} & {
	[K in optionalKeys<T>]?: T[K];
} & { [k in keyof T]?: unknown };

type baseObjectOutputType<Shape extends ObjectValueField> = {
	[k in keyof Shape]: Shape[k]['_value'];
};

export type ObjectFieldResult<
	Shape extends ObjectValueField,
> = flatten<
	addQuestionMarks<baseObjectOutputType<Shape>>
>



