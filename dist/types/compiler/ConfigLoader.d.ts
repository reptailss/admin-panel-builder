import { AdminPanelBuilderConfig } from "../src/config";
export declare class ConfigLoader {
    private readonly configFile;
    loadConfig(): Promise<AdminPanelBuilderConfig>;
    private resolveConfigPath;
}
