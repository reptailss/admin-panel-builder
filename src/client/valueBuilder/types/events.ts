import {IField} from "@fields/interfaces/field";

export type OnChangeValueBuilder<Value> = (
	newValue: Value,
	field: IField<Value>,
	path: string | null
) => void


export type OnAddToArrayValueBuilder<Value> = (
	newValue: Value | null,
	field: IField<Value>,
	path: string | null
) => void

export type OnDeleteFromArrayValueBuilder<Value> = (
	field: IField<Value>,
	path: string
) => void


export type OnClosePopoverValueBuilder<Value> = (
	field: IField<Value>,
	path: string | null
) => void

export type OnChangeUnionTypeValueBuilder<Value> = (
	newValue: Value,
	field: IField<Value>,
	path: string | null
) => void

