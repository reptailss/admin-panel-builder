export declare function MultiSelect({ label, options, value, onChange, desktopWidth, mobileWidth, disabled, color, }: {
    label?: string;
    value: string[];
    onChange: (value: string[]) => void;
    options: {
        value: string;
        label: string;
    }[];
    desktopWidth?: string;
    mobileWidth?: string;
    disabled?: boolean;
    color?: string;
}): import("react/jsx-runtime").JSX.Element;
