import { Field } from "./Field";
import { IDateField } from "../interfaces/date";
import { DateRender } from "../render/impl/DateRender";
import { IDateRender } from "../render/interfaces/date";
export declare class DateField extends Field<Date, IDateRender> implements IDateField {
    readonly type: "Date";
    readonly _value: Date;
    readonly defaultRender: DateRender;
    getInitialValue(): Date | null;
}
