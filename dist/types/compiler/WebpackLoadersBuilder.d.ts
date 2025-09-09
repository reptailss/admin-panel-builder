import { ModuleOptions } from "webpack";
export declare class WebpackLoadersBuilder {
    buildRules(mode: 'production' | 'development'): ModuleOptions['rules'];
    private buildBabelLoader;
    private buildCssLoader;
    private buildScssLoader;
}
