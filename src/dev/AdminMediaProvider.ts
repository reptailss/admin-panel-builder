import {IMediaValueProvider} from "../fields/interfaces/mediaValueProvider";
import {AbstractMediaValueProvider} from "../fields/impl/AbstractMediaValueProvider";
import {AdminServerApiUrlBuilder} from "./AdminServerApiUrlBuilder";
import {AdminAuthRequest} from "../requests/AdminAuthRequest";

export const MEDIA_FILES_ROUTE_PATHS = {
	add: '/api/media-library/add',
	delete: '/api/media-library/delete/:id',
	list: '/api/media-library/list'
} as const

export const MEDIA_FOLDERS_ROUTE_PATHS = {
	add: '/api/media-library/folders/add',
	update: '/api/media-library/folders/update/:id',
	delete: '/api/media-library/folders/delete/:id',
	list: '/api/media-library/folders/list',
} as const


export class AdminMediaProvider extends AbstractMediaValueProvider implements IMediaValueProvider {
	
	public async createMediaFile({
									 file,
									 name,
									 folder_id,
									 token,
								 }: {
		file: File,
		name: string,
		folder_id: number
		token: string | null
	}): Promise<void> {
		const formData = new FormData()
		
		formData.append('name', name)
		formData.append('folder_id', folder_id.toString())
		formData.append('file', file)
		
		await AdminAuthRequest.post({
			url: AdminServerApiUrlBuilder.build(MEDIA_FILES_ROUTE_PATHS.add),
			token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyZXB0YWlsc3MiLCJ1c2VySWQiOjEyNTEsImNsaWVudElkIjo3LCJ0eXBlIjoxLCJpYXQiOjE3NTU2ODYzMTksImV4cCI6MTc1NTY4OTkxOX0.BZ_Yy52HGwVMPbeFH60c2PcwCqe4J26HJRRZ0brjq1s',
			body: formData,
		})
	}
	
	public async deleteMediaFile({
									 id,
									 token,
								 }: {
		id: number | string
		token: string | null
	}): Promise<void> {
		
		await AdminAuthRequest.delete({
			url: AdminServerApiUrlBuilder.build(MEDIA_FILES_ROUTE_PATHS.delete),
			token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyZXB0YWlsc3MiLCJ1c2VySWQiOjEyNTEsImNsaWVudElkIjo3LCJ0eXBlIjoxLCJpYXQiOjE3NTU2ODYzMTksImV4cCI6MTc1NTY4OTkxOX0.BZ_Yy52HGwVMPbeFH60c2PcwCqe4J26HJRRZ0brjq1s',
			pathParams: {
				id,
			},
		})
		
	}
	
	public async getAllMediaFiles({
									  token,
								  }: {
		token: string | null
	}): Promise<{
		name: string
		folder_id: number
		file: string
		id: number
		mimetype: string | null
	}[]> {
		const res: any = await AdminAuthRequest.get({
			url: AdminServerApiUrlBuilder.build(MEDIA_FILES_ROUTE_PATHS.list),
			token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyZXB0YWlsc3MiLCJ1c2VySWQiOjEyNTEsImNsaWVudElkIjo3LCJ0eXBlIjoxLCJpYXQiOjE3NTU2ODYzMTksImV4cCI6MTc1NTY4OTkxOX0.BZ_Yy52HGwVMPbeFH60c2PcwCqe4J26HJRRZ0brjq1s',
			searchParams: {
				page: '1',
				per_page: '0',
			},
		})
		return res.rows
	}
	
	public async createMediaFolder({
									   name,
									   parent_id,
									   token,
								   }: {
		name: string
		parent_id: number
		token: string | null
	}): Promise<void> {
		
		
		await AdminAuthRequest.post({
			url: AdminServerApiUrlBuilder.build(MEDIA_FOLDERS_ROUTE_PATHS.add),
			token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyZXB0YWlsc3MiLCJ1c2VySWQiOjEyNTEsImNsaWVudElkIjo3LCJ0eXBlIjoxLCJpYXQiOjE3NTU2ODYzMTksImV4cCI6MTc1NTY4OTkxOX0.BZ_Yy52HGwVMPbeFH60c2PcwCqe4J26HJRRZ0brjq1s',
			body: JSON.stringify({
				name,
				parent_id,
			}),
			headers: {
				'content-type': 'application/json',
			},
		})
	}
	
	public async updateMediaFolder({
									   name,
									   parent_id,
									   id,
									   token,
								   }: {
		name: string
		parent_id: number
		id: number | string
		token: string | null
	}): Promise<void> {
		
		await AdminAuthRequest.put({
			url: AdminServerApiUrlBuilder.build(MEDIA_FOLDERS_ROUTE_PATHS.update),
			token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyZXB0YWlsc3MiLCJ1c2VySWQiOjEyNTEsImNsaWVudElkIjo3LCJ0eXBlIjoxLCJpYXQiOjE3NTU2ODYzMTksImV4cCI6MTc1NTY4OTkxOX0.BZ_Yy52HGwVMPbeFH60c2PcwCqe4J26HJRRZ0brjq1s',
			body: JSON.stringify({
				name,
				parent_id,
			}),
			headers: {
				'content-type': 'application/json',
			},
			pathParams: {
				id,
			},
		})
	}
	
	public async deleteMediaFolder({
									   id,
									   token,
								   }: {
		id: number
		token: string | null
	}): Promise<void> {
		
		await AdminAuthRequest.delete({
			url: AdminServerApiUrlBuilder.build(MEDIA_FOLDERS_ROUTE_PATHS.delete),
			token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyZXB0YWlsc3MiLCJ1c2VySWQiOjEyNTEsImNsaWVudElkIjo3LCJ0eXBlIjoxLCJpYXQiOjE3NTU2ODYzMTksImV4cCI6MTc1NTY4OTkxOX0.BZ_Yy52HGwVMPbeFH60c2PcwCqe4J26HJRRZ0brjq1s',
			pathParams: {
				id,
			},
		})
	}
	
	public async getAllMediaFolders({
										token,
									}: {
		token: string | null
	}): Promise<{
		name: string
		parent_id: number
		id: number
	}[]> {
		
		const res: any = await AdminAuthRequest.get({
			url: AdminServerApiUrlBuilder.build(MEDIA_FOLDERS_ROUTE_PATHS.list),
			token: token || '',
			searchParams: {
				page: '1',
				per_pag: '0',
			},
		})
		return res.rows
	}
}


