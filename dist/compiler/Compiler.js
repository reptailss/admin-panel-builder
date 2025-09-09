"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compiler = void 0;
const webpack_1 = __importDefault(require("webpack"));
const WebpackConfigBuilder_1 = require("./WebpackConfigBuilder");
class Compiler {
    constructor() {
        this.adminBuilderWebpackConfig = new WebpackConfigBuilder_1.WebpackConfigBuilder();
        this.printError = (err) => {
            if (typeof err === 'string') {
                console.error(err);
                return;
            }
            const { message, stack, moduleName, loc, details } = err;
            console.error(`📦 ${moduleName || ''}${loc ? ` @ ${loc}` : ''}`);
            console.error(`🧨 Message: ${message}`);
            if (details) {
                console.error(`📄 Details: ${details}`);
            }
            if (stack) {
                console.error(`🧵 Stack:\n${stack}`);
            }
            console.error('─'.repeat(80));
        };
    }
    async run() {
        const config = await this.adminBuilderWebpackConfig.getBuildConfig();
        (0, webpack_1.default)(config, (error, stats) => {
            var _a, _b;
            if (error) {
                console.error('❌ Webpack fatal error:');
                this.printError(error);
                return;
            }
            if (!stats) {
                console.error('❌ Webpack returned no stats');
                return;
            }
            const info = stats.toJson({ all: false, errors: true, warnings: true });
            if (stats.hasErrors()) {
                console.error('❌ Webpack compilation errors:');
                (_a = info.errors) === null || _a === void 0 ? void 0 : _a.forEach(this.printError);
            }
            if (stats.hasWarnings()) {
                console.warn('⚠️ Webpack compilation warnings:');
                (_b = info.warnings) === null || _b === void 0 ? void 0 : _b.forEach(this.printError);
            }
            if (!stats.hasErrors()) {
                console.log('✅ Build completed successfully');
            }
        });
    }
}
exports.Compiler = Compiler;
//# sourceMappingURL=Compiler.js.map