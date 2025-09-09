import webpack from "webpack";
export declare class WebpackConfigBuilder {
    private readonly configLoader;
    private readonly webpackPluginsBuilder;
    private readonly webpackLoadersBuilder;
    getBuildConfig(): Promise<webpack.Configuration>;
    getDevConfig(): Promise<webpack.Configuration>;
}
