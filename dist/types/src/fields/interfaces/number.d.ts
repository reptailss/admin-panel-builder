import { IField } from "./field";
import { INumberRender } from "../render/interfaces/number";
export interface INumberField extends IField<number, INumberRender> {
    type: 'number';
    setMax(max: number): this;
    getMax(): number | null;
    setMin(min: number): this;
    getMin(): number | null;
}
