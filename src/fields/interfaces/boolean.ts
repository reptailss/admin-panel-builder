import {IField} from '@fields/interfaces/field'
import {IBooleanRender} from "@fields/render/interfaces/boolean";

export interface IBooleanField extends IField<boolean, IBooleanRender> {
	type: 'boolean'
}
