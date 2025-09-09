export declare class ValueBuilderViewHelper {
    static mergeValue(originalValue: unknown, path: string, newValue: unknown): object;
    static addToArray(originalValue: unknown, path: string, item: unknown): object;
    static deleteFromArray(originalValue: unknown, path: string): object;
    private static parsePath;
}
