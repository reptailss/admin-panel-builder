import { IField } from "./field";
import { IDateRender } from "../render/interfaces/date";
export interface IDateField extends IField<Date, IDateRender> {
    type: 'Date';
}
