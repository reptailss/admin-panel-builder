export type AdminPanelBuilderConfig = {
    mainFilePath: string;
    buildDirectory: string;
    publicPath: string;
    alias: Record<string, string>;
    htmlTemplatePathFile?: string | null;
    faviconPathFile?: string | null;
    hmrServerPort?: number;
};
