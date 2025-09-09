import {IContentManagerAction} from "@contentManager/interfaces";
import {ContentManager} from "../contentManager/ContentManager";
import {AdminAuthRequest} from "../requests/AdminAuthRequest";
import {AdminServerApiUrlBuilder} from "./AdminServerApiUrlBuilder";
import {PAGE_CONTENTS_ROUTE_PATHS} from "./pageContentsRoutePaths";
import {AdminPagesContentManagerProvider} from "./AdminPagesContentManagerProvider";
import {adminPrivacyPolicyPageContent} from "./adminPrivacyPolicyPageContent";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyZXB0YWlsc3MiLCJ1c2VySWQiOjEyNTEsImNsaWVudElkIjo3LCJ0eXBlIjoxLCJpYXQiOjE3NTU3NjcyNTMsImV4cCI6MTc1NTc3MDg1M30.n-n68xNAlp4bgjVh_B0F221T4w10p3wJn0LE3lAPkF8'

class ResetToDefaultPageContentAction implements IContentManagerAction {
	
	public getName(): string {
		return 'Встановити дефолтне значення'
	}
	
	public async action({
							fieldKey,
							locale,
							fieldUrl,
						}: {
		fieldUrl: string
		fieldKey: string
		locale: string | null
	}): Promise<void> {
		await AdminAuthRequest.post({
			url: AdminServerApiUrlBuilder.build(PAGE_CONTENTS_ROUTE_PATHS.resetToDefaultPageContent),
			token: token || '',
			body: JSON.stringify({
				key: fieldKey,
				page: fieldUrl,
				locale,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
	}
}

export const adminPagesContentManager = new ContentManager(
	'pages',
	new AdminPagesContentManagerProvider(),
)
	.addAction(new ResetToDefaultPageContentAction())
	.addField(adminPrivacyPolicyPageContent)