export declare const BLOCK_TYPE_DATA: {
    value: string;
    label: string;
}[];
export declare const EditorBlockTypeToolbar: ({ onChange, currentState }: {
    config: {
        inDropdown: boolean;
        options: string[];
    };
    translations: {
        [key: string]: string;
    };
    currentState: {
        blockType: "Normal";
    };
    expanded: boolean;
    onChange: (value: string) => void;
}) => import("react/jsx-runtime").JSX.Element;
