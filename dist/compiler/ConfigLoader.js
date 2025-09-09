"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigLoader = void 0;
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class ConfigLoader {
    constructor() {
        this.configFile = 'adminPanelBuilderConfig.ts';
    }
    async loadConfig() {
        const configPath = this.resolveConfigPath();
        if (!fs_1.default.existsSync(configPath)) {
            throw new Error(`Config file not found: ${this.configFile} in root directory`);
        }
        const configModule = await Promise.resolve(`${configPath}`).then(s => __importStar(require(s)));
        const configFactory = configModule.default;
        if (typeof configFactory !== 'function') {
            throw new Error(`Expected default export to be a function in: ${this.configFile}`);
        }
        return configFactory();
    }
    resolveConfigPath() {
        const rootDir = process.cwd();
        return path_1.default.join(rootDir, this.configFile);
    }
}
exports.ConfigLoader = ConfigLoader;
//# sourceMappingURL=ConfigLoader.js.map