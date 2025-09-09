import {IField} from '@fields/interfaces/field'
import {IDateRender} from "@fields/render/interfaces/date";

export interface IDateField extends IField<Date, IDateRender> {
	type: 'Date'
}
