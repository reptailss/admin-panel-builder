declare global {
	var _PUBLIC_PATH: string
	var _servicePrefix: string | undefined
}


export class PathsHelper {
	static getBasePath(): string {
		const publicPath = this.getPublicPath()
		const prefix = window._servicePrefix ? `/${window._servicePrefix}/` : '/'
		const publicPrefix = publicPath ? publicPath === '/' ? '' : `${publicPath}/` : ''
		if (prefix === '/') {
			return publicPrefix
		}
		return `${prefix}${publicPrefix}`
	}
	
	private static getPublicPath(): string {
		try {
			return _PUBLIC_PATH
		} catch (error) {
			return ''
		}
	}
}