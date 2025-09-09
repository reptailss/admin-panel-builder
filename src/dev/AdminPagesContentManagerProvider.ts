import {IContentManagerProvider} from "../contentManager/interfaces";
import {AdminAuthRequest} from "../requests/AdminAuthRequest";
import {AdminServerApiUrlBuilder} from "./AdminServerApiUrlBuilder";
import {PAGE_CONTENTS_ROUTE_PATHS} from "./pageContentsRoutePaths";


const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyZXB0YWlsc3MiLCJ1c2VySWQiOjEyNTEsImNsaWVudElkIjo3LCJ0eXBlIjoxLCJpYXQiOjE3NTU3NjcyNTMsImV4cCI6MTc1NTc3MDg1M30.n-n68xNAlp4bgjVh_B0F221T4w10p3wJn0LE3lAPkF8'


export class AdminPagesContentManagerProvider implements IContentManagerProvider {
    
    public async saveContent<Value>(
        {
            fieldUrl,
            fieldKey,
            content,
            locale,
        }: {
            fieldUrl: string
            fieldKey: string
            content: Value
            locale: string | null
            token: string | null
        },
    ): Promise<void> {
        
        await AdminAuthRequest.post({
            url: AdminServerApiUrlBuilder.build(PAGE_CONTENTS_ROUTE_PATHS.save),
            token,
            body: JSON.stringify({
                key: fieldKey,
                value: content,
                page: fieldUrl,
                locale,
            }),
            headers: {
                'Content-Type': 'application/json',
                
            },
        })
    }
    
    public async getInitialContent<Value>({
                                              fieldUrl,
                                              fieldKey,
                                              locale,
                                          }: {
                                              fieldUrl: string
                                              fieldKey: string
                                              locale: string | null
                                              token: string | null
                                          },
    ): Promise<Value | null> {
        
        const res: any = await AdminAuthRequest.get({
            url: AdminServerApiUrlBuilder.build(PAGE_CONTENTS_ROUTE_PATHS.getByPageAndKey),
            token: token || '',
            searchParams: {
                page: fieldUrl,
                key: fieldKey,
                locale: locale || '',
            },
        })
        return res.row.value
    }
    
    
    public async deleteContent({
                                   fieldUrl,
                                   fieldKey,
                                   locale,
                               }: {
                                   fieldUrl: string
                                   fieldKey: string
                                   locale: string | null
                                   token: string | null
                               },
    ): Promise<void> {
        
        await AdminAuthRequest.delete({
            url: AdminServerApiUrlBuilder.build(PAGE_CONTENTS_ROUTE_PATHS.deleteByPageAndKey),
            token,
            searchParams: {
                page: fieldUrl,
                key: fieldKey,
                locale: locale || '',
            },
        })
    }
}