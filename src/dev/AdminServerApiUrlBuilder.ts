declare global {
	interface Window {
		_servicePrefix: string
	}
}

export class AdminServerApiUrlBuilder {
	static build<Url>(url: Url): Url {
		return `http://localhost:3017${url}` as any
		if (!window._servicePrefix) {
			return url
		}
		return `/${window._servicePrefix}${url}` as Url
	}
}