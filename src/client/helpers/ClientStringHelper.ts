export class ClientStringHelper {
	static sliceString(string: string, length: number = 13, point = true): string {
		if (typeof string !== "string") {
			return ''
		}
		if (string.length) {
			return string.length > length ? string.slice(0, length) + (point ? '...' : '') : string;
		}
		return ''
	};
}