type Option<T> = {
    value: string;
    label: string;
    groupValue: string;
    data: T;
};
export declare function SelectCheckedGroups<T>({ options, value, onChange, disabled, label, }: {
    value: string[];
    onChange: (value: string[], data: T[]) => void;
    options: Option<T>[];
    disabled?: boolean;
    label: string;
}): import("react/jsx-runtime").JSX.Element;
export {};
