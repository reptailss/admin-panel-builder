export class ClientErrorsHelper {
	
	static buildErrorMessageFromError(error: unknown): string {
		if (typeof error === 'string') {
			return error
		}
		if (Array.isArray(error)) {
			const resultArray = error.map((value) => this.buildErrorMessageFromError(value))
			return resultArray.filter(item => item !== '').join('\n ')
		}
		if (typeof error === 'object' && error !== null) {
			let result = ''
			for (const key in error) {
				if (Object.prototype.hasOwnProperty.call(error, key)) {
					const value = this.buildErrorMessageFromError((error as Record<string, unknown>)[key])
					if (value !== '') {
						result += value + '\n '
					}
				}
			}
			return result.slice(0, -2)
		}
		return ''
	}
}