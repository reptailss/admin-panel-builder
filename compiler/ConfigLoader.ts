import path from 'path'
import fs from 'fs'
import {AdminPanelBuilderConfig} from "../src/config";


export class ConfigLoader {
    private readonly configFile = 'adminPanelBuilderConfig.ts'
    
    public async loadConfig(): Promise<AdminPanelBuilderConfig> {
        const configPath = this.resolveConfigPath()
        if (!fs.existsSync(configPath)) {
            throw new Error(`Config file not found: ${this.configFile} in root directory`)
        }
        
        const configModule = await import(configPath)
        const configFactory = configModule.default
        
        if (typeof configFactory !== 'function') {
            throw new Error(`Expected default export to be a function in: ${this.configFile}`)
        }
        
        return configFactory()
    }
    
    private resolveConfigPath(): string {
        const rootDir = process.cwd()
        return path.join(rootDir, this.configFile)
    }
}
