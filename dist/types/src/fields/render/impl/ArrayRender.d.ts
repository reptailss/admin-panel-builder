import { IField } from "../../interfaces/field";
import React from "react";
import { IArrayRender } from "../interfaces/array";
export declare class ArrayRender<Value> implements IArrayRender<Value> {
    previewRenderConfig: null;
    FieldRender(props: {
        field: IField<Value>;
        initialValue: Value;
        onChange: (value: Value) => void;
    }): React.ReactNode;
    PreviewRender(props: {
        field: IField<Value>;
        value: Value | null | undefined;
        renderConfig: null;
    }): React.ReactNode;
}
