import {IField} from '@fields/interfaces/field'

export type InferField<T extends IField> = T['_value'];
