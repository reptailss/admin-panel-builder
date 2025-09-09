import { Configuration } from "webpack";
export declare class WebpackPluginsBuilder {
    buildPlugins({ mode, htmlPaths, publicPath }: {
        mode: 'production' | 'development';
        htmlPaths: {
            html: string;
            favicon: string;
        };
        publicPath: string;
    }): Configuration['plugins'];
}
