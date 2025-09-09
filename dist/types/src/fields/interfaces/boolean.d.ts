import { IField } from "./field";
import { IBooleanRender } from "../render/interfaces/boolean";
export interface IBooleanField extends IField<boolean, IBooleanRender> {
    type: 'boolean';
}
