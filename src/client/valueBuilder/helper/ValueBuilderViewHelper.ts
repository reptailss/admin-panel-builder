export class ValueBuilderViewHelper {
	
	static mergeValue(
		originalValue: unknown,
		path: string,
		newValue: unknown
	) {
		const parsedPath = this.parsePath(path)
		const result = typeof originalValue === 'object' && originalValue !== null
			? structuredClone(originalValue)
			: {}
		
		let current: any = result
		
		for (let i = 0; i < parsedPath.length; i++) {
			const key = parsedPath[i]
			
			if (i === parsedPath.length - 1) {
				current[key] = newValue
			} else {
				if (typeof current[key] !== 'object' || current[key] === null) {
					current[key] = typeof parsedPath[i + 1] === 'number' ? [] : {}
				}
				current = current[key]
			}
		}
		
		return result
	}
	
	static addToArray(
		originalValue: unknown,
		path: string,
		item: unknown
	) {
		const parsedPath = this.parsePath(path)
		const result = typeof originalValue === 'object' && originalValue !== null
			? structuredClone(originalValue)
			: {}
		
		let current: any = result
		
		for (let i = 0; i < parsedPath.length; i++) {
			const key = parsedPath[i]
			
			if (i === parsedPath.length - 1) {
				if (!Array.isArray(current[key])) {
					current[key] = []
				}
				current[key].push(item)
			} else {
				if (typeof current[key] !== 'object' || current[key] === null) {
					current[key] = typeof parsedPath[i + 1] === 'number' ? [] : {}
				}
				current = current[key]
			}
		}
		
		return result
	}
	
	static deleteFromArray(
		originalValue: unknown,
		path: string
	) {
		const parsedPath = this.parsePath(path)
		const result = typeof originalValue === 'object' && originalValue !== null
			? structuredClone(originalValue)
			: {}
		
		let current: any = result
		
		for (let i = 0; i < parsedPath.length - 1; i++) {
			const key = parsedPath[i]
			
			if (typeof current[key] !== 'object' || current[key] === null) {
				return result
			}
			
			current = current[key]
		}
		
		const lastKey = parsedPath[parsedPath.length - 1]
		if (typeof lastKey === 'number' && Array.isArray(current)) {
			current.splice(lastKey, 1)
		} else if (Array.isArray(current[lastKey])) {
			current[lastKey].splice(0, 1)
		}
		
		return result
	}
	
	private static parsePath(path: string): (string | number)[] {
		const regex = /[^.[\]]+/g
		const parts: (string | number)[] = []
		
		for (const match of path.matchAll(regex)) {
			const part = match[0]
			const parsed = Number(part)
			parts.push(isNaN(parsed) ? part : parsed)
		}
		
		return parts
	}
}