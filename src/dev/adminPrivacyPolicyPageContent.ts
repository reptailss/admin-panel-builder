import {ObjectField} from "../fields/impl/ObjectField";
import {ContentManagerField} from "../contentManager/ContentManagerField";
import {CLIENT_ROUTE_PATHS} from "./index";
import {StringField} from "../fields/impl/StringField";
import {MultilineField} from "../fields/impl/MultilineField";
import {EditorField} from "../fields/impl/EditorField";
import {AdminMediaProvider} from "./AdminMediaProvider";


class EditorFieldCustom extends EditorField {
	constructor() {
		super();
		this.setMediaProvider(new AdminMediaProvider())
	}
}

export const adminPrivacyPolicyPageContent = new ContentManagerField<any>(
	CLIENT_ROUTE_PATHS.termsOfUse,
	new ObjectField({
		seo: new ObjectField({
			title: new StringField().setName('Заголовок'),
			description: new MultilineField().setName('Опис'),
		}).setName('СЕО').setIcon('hugeicons:seo'),
		content: new ObjectField({
			value: new EditorFieldCustom()
		}).setName('Контент').setIcon('streamline-freehand:content-write'),
	}),
).setName('Privacy policy').setIcon('iconoir:privacy-policy')

