import { IField } from "./field";
export type InferField<T extends IField> = T['_value'];
