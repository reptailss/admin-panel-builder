"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebpackPluginsBuilder = void 0;
const webpack_1 = require("webpack");
const mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
const node_polyfill_webpack_plugin_1 = __importDefault(require("node-polyfill-webpack-plugin"));
const html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
const fork_ts_checker_webpack_plugin_1 = __importDefault(require("fork-ts-checker-webpack-plugin"));
class WebpackPluginsBuilder {
    buildPlugins({ mode, htmlPaths, publicPath }) {
        const plugins = [
            new mini_css_extract_plugin_1.default(),
            new node_polyfill_webpack_plugin_1.default(),
            new html_webpack_plugin_1.default({
                template: htmlPaths.html,
                favicon: htmlPaths.favicon,
            }),
            new webpack_1.DefinePlugin({
                "_PUBLIC_PATH": JSON.stringify(publicPath),
            }),
        ];
        if (mode === 'development') {
            plugins.push(new fork_ts_checker_webpack_plugin_1.default());
        }
        return plugins;
    }
}
exports.WebpackPluginsBuilder = WebpackPluginsBuilder;
//# sourceMappingURL=WebpackPluginsBuilder.js.map