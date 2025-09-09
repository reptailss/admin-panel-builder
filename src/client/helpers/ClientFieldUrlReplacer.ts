export class ClientFieldUrlReplacer {
	static fieldUrlToPageUrl(fieldUrl: string): string {
		if (fieldUrl === '/') {
			return '___home';
		}
		return fieldUrl.replace(/\//g, '___')
	}
	
	static pageUrlToFieldUrl(pageUrl: string): string {
		if (pageUrl === '___home') {
			return '/'
		}
		return pageUrl.replace(/___/g, '/')
	}
}
