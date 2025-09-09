export type OnEditPost = (post: any) => Promise<void>
export type OnDeletePost = (post: any) => Promise<void>

export type OnSavePost = (createPost: any) => Promise<void>
export type OnSaveMultilanguagePost = (baseField: any,multilanguageField:any) => Promise<void>
