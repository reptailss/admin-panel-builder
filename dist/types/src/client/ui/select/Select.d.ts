export declare function Select<Value extends string>({ label, options, value, onChange, desktopWidth, mobileWidth, disabled, color, }: {
    label?: string;
    value: Value;
    onChange: (value: Value) => void;
    options: {
        value: Value;
        label: string;
    }[];
    desktopWidth?: string;
    mobileWidth?: string;
    disabled?: boolean;
    color?: string;
}): import("react/jsx-runtime").JSX.Element;
