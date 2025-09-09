"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevWatcher = void 0;
const webpack_1 = __importDefault(require("webpack"));
const webpack_dev_server_1 = __importDefault(require("webpack-dev-server"));
const WebpackConfigBuilder_1 = require("./WebpackConfigBuilder");
const ConfigLoader_1 = require("./ConfigLoader");
class DevWatcher {
    constructor() {
        this.adminBuilderWebpackConfig = new WebpackConfigBuilder_1.WebpackConfigBuilder();
        this.configLoader = new ConfigLoader_1.ConfigLoader();
    }
    async run() {
        var _a;
        const webpackConfig = await this.adminBuilderWebpackConfig.getDevConfig();
        const config = await this.configLoader.loadConfig();
        const compiler = (0, webpack_1.default)(webpackConfig);
        const server = new webpack_dev_server_1.default({
            port: config.hmrServerPort || 3000,
            open: true,
            historyApiFallback: true,
            hot: true,
            static: {
                directory: ((_a = webpackConfig.output) === null || _a === void 0 ? void 0 : _a.path) || ''
            },
        }, compiler);
        await server.start();
    }
}
exports.DevWatcher = DevWatcher;
//# sourceMappingURL=DevWatcher.js.map