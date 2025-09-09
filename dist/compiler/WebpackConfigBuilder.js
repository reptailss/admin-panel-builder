"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebpackConfigBuilder = void 0;
const path_1 = __importDefault(require("path"));
const WebpackPluginsBuilder_1 = require("./WebpackPluginsBuilder");
const WebpackLoadersBuilder_1 = require("./WebpackLoadersBuilder");
const ConfigLoader_1 = require("./ConfigLoader");
class WebpackConfigBuilder {
    constructor() {
        this.configLoader = new ConfigLoader_1.ConfigLoader();
        this.webpackPluginsBuilder = new WebpackPluginsBuilder_1.WebpackPluginsBuilder();
        this.webpackLoadersBuilder = new WebpackLoadersBuilder_1.WebpackLoadersBuilder();
    }
    async getBuildConfig() {
        const config = await this.configLoader.loadConfig();
        return {
            mode: 'production',
            entry: {
                index: path_1.default.resolve(process.cwd(), ...config.mainFilePath.split('/')),
            },
            output: {
                path: path_1.default.resolve(process.cwd(), ...config.buildDirectory.split('/')),
                filename: '[name].js',
                publicPath: config.publicPath,
            },
            resolve: {
                extensions: ['.ts', '.tsx', '.js'],
                alias: config.alias,
            },
            plugins: this.webpackPluginsBuilder.buildPlugins({
                mode: 'production',
                publicPath: config.publicPath,
                htmlPaths: {
                    html: config.htmlTemplatePathFile ? path_1.default.resolve(process.cwd(), ...config.htmlTemplatePathFile.split('/')) : path_1.default.resolve(__dirname, '../', '../', 'public', 'index.html'),
                    favicon: config.faviconPathFile ? path_1.default.resolve(process.cwd(), ...config.faviconPathFile.split('/')) : path_1.default.resolve(__dirname, '../', '../', 'public', 'favicon.ico'),
                }
            }),
            module: {
                rules: this.webpackLoadersBuilder.buildRules('production'),
            },
        };
    }
    async getDevConfig() {
        const config = await this.configLoader.loadConfig();
        return {
            mode: 'development',
            entry: {
                index: path_1.default.resolve(process.cwd(), ...config.mainFilePath.split('/')),
            },
            output: {
                path: path_1.default.resolve(process.cwd(), ...config.buildDirectory.split('/')),
                filename: '[name].js',
                publicPath: '/'
            },
            resolve: {
                extensions: ['.ts', '.tsx', '.js'],
                alias: config.alias,
            },
            plugins: this.webpackPluginsBuilder.buildPlugins({
                mode: 'development',
                publicPath: '/',
                htmlPaths: {
                    html: config.htmlTemplatePathFile ? path_1.default.resolve(process.cwd(), ...config.htmlTemplatePathFile.split('/')) : path_1.default.resolve(__dirname, '../', '../', 'public', 'index.html'),
                    favicon: config.faviconPathFile ? path_1.default.resolve(process.cwd(), ...config.faviconPathFile.split('/')) : path_1.default.resolve(__dirname, '../', '../', 'public', 'favicon.ico'),
                },
            }),
            module: {
                rules: this.webpackLoadersBuilder.buildRules('development'),
            },
            stats: {
                warningsFilter: /Critical dependency: the request of a dependency is an expression/,
            }
        };
    }
}
exports.WebpackConfigBuilder = WebpackConfigBuilder;
//# sourceMappingURL=WebpackConfigBuilder.js.map