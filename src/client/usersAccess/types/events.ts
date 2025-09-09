export type OnEditAccess = (userInfo: any) => Promise<void>

export type OnSaveAccess = (roles: string[]) => Promise<void>
