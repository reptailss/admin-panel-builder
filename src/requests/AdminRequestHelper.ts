export class AdminRequestHelper {
    static buildAuthHeaders(token: string, headers?: HeadersInit): HeadersInit {
        if (!headers) {
            return {
                Authorization: `Bearer ${token}`,
            }
        }
        
        return {
            ...headers,
            Authorization: `Bearer ${token}`,
        }
    }
    
    static interpolateUrl(url: string | URL, pathParams: Record<string, string | number>): string {
        let str = url.toString()
        for (const [key, value] of Object.entries(pathParams)) {
            str = str.replace(`:${key}`, String(value))
        }
        return str
    }
    
    
}