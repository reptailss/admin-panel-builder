import { IField } from "./field";
import { IBooleanNumRender } from "../render/interfaces/booleanNum";
export interface IBooleanNumField extends IField<0 | 1, IBooleanNumRender> {
    type: 'booleanNum';
}
