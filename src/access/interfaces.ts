export interface IAccessProvider {
	
	checkAccess(token: string): Promise<{
		hasAccess: boolean
		roles: string[]
	}>
	
}