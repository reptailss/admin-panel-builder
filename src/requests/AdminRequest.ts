import {RequirePathParams} from "@requests/types";
import {AdminRequestHelper} from "@requests/AdminRequestHelper";


export class AdminRequest {
	
	static async get<Url extends string>({
											 url,
											 searchParams,
											 ...rest
										 }: {
		url: Url
		searchParams?: Record<string, string>
	} & RequirePathParams<Url> & Omit<RequestInit, 'method'>): Promise<any> {
		const interpolatedUrl = AdminRequestHelper.interpolateUrl(url, (rest as any).pathParams || {})
		
		const finalUrl = new URL(interpolatedUrl, location.origin)
		if (searchParams) {
			for (const [key, value] of Object.entries(searchParams)) {
				finalUrl.searchParams.set(key, value)
			}
		}
		
		const response = await fetch(finalUrl.toString(), {
			method: 'GET',
			...rest,
		})
		if (!response.ok) {
			const data = await response.json()
			return Promise.reject(data)
		}
		return response.json()
	}
	
	static async put<Url extends string>({
											 url,
											 searchParams,
											 ...rest
										 }: {
		url: Url
		searchParams?: Record<string, string>
	} & RequirePathParams<Url> & Omit<RequestInit, 'method'>): Promise<any> {
		const interpolatedUrl = AdminRequestHelper.interpolateUrl(url, (rest as any).pathParams || {})
		
		const finalUrl = new URL(interpolatedUrl, location.origin)
		if (searchParams) {
			for (const [key, value] of Object.entries(searchParams)) {
				finalUrl.searchParams.set(key, value)
			}
		}
		
		const response = await fetch(finalUrl.toString(), {
			method: 'PUT',
			...rest,
		})
		if (!response.ok) {
			const data = await response.json()
			return Promise.reject(data)
		}
		return response.json()
	}
	
	static async post<Url extends string>({
											  url,
											  searchParams,
											  ...rest
										  }: {
		url: Url
		searchParams?: Record<string, string>
	} & RequirePathParams<Url> & Omit<RequestInit, 'method'>): Promise<any> {
		const interpolatedUrl = AdminRequestHelper.interpolateUrl(url, (rest as any).pathParams || {})
		
		const finalUrl = new URL(interpolatedUrl, location.origin)
		if (searchParams) {
			for (const [key, value] of Object.entries(searchParams)) {
				finalUrl.searchParams.set(key, value)
			}
		}
		
		const response = await fetch(finalUrl.toString(), {
			method: 'POST',
			...rest,
		})
		if (!response.ok) {
			const data = await response.json()
			return Promise.reject(data)
		}
		return response.json()
	}
	
	static async delete<Url extends string>({
												url,
												searchParams,
												...rest
											}: {
		url: Url
		searchParams?: Record<string, string>
	} & RequirePathParams<Url> & Omit<RequestInit, 'method'>): Promise<any> {
		const interpolatedUrl = AdminRequestHelper.interpolateUrl(url, (rest as any).pathParams || {})
		
		const finalUrl = new URL(interpolatedUrl, location.origin)
		if (searchParams) {
			for (const [key, value] of Object.entries(searchParams)) {
				finalUrl.searchParams.set(key, value)
			}
		}
		
		const response = await fetch(finalUrl.toString(), {
			method: 'DELETE',
			...rest,
		})
		if (!response.ok) {
			const data = await response.json()
			return Promise.reject(data)
		}
		return response.json()
	}
	
}