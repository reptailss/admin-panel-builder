import { IContentManager, IContentManagerProvider } from "../../contentManager/interfaces";
import { IField } from "../../fields/interfaces/field";
export declare function ClientContent({ fieldKey, fieldUrl, locale, field, provider, contentManager, }: {
    field: IField<unknown>;
    fieldKey: string;
    fieldUrl: string;
    locale: string | null;
    provider: IContentManagerProvider;
    contentManager: IContentManager;
}): import("react/jsx-runtime").JSX.Element;
