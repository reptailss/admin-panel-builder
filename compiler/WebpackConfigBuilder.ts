import webpack from "webpack";
import path from "path";
import {WebpackPluginsBuilder} from "./WebpackPluginsBuilder";
import {WebpackLoadersBuilder} from "./WebpackLoadersBuilder";
import {ConfigLoader} from "./ConfigLoader";

export class WebpackConfigBuilder {
	private readonly configLoader = new ConfigLoader()
	private readonly webpackPluginsBuilder = new WebpackPluginsBuilder()
	private readonly webpackLoadersBuilder = new WebpackLoadersBuilder()
	
	public async getBuildConfig(): Promise<webpack.Configuration> {
		const config = await this.configLoader.loadConfig()
		return {
			mode: 'production',
			entry: {
				index: path.resolve(process.cwd(), ...config.mainFilePath.split('/')),
			},
			output: {
				path: path.resolve(process.cwd(), ...config.buildDirectory.split('/')),
				filename: '[name].js',
				publicPath: config.publicPath,
			},
			resolve: {
				extensions: ['.ts', '.tsx', '.js'],
				alias: config.alias,
			},
			plugins: this.webpackPluginsBuilder.buildPlugins({
				mode: 'production',
				publicPath:config.publicPath,
				htmlPaths: {
					html: config.htmlTemplatePathFile ? path.resolve(process.cwd(), ...config.htmlTemplatePathFile.split('/')) : path.resolve(__dirname, '../', '../', 'public', 'index.html'),
					favicon: config.faviconPathFile ? path.resolve(process.cwd(), ...config.faviconPathFile.split('/')) : path.resolve(__dirname, '../', '../', 'public', 'favicon.ico'),
				}
			}),
			module: {
				rules: this.webpackLoadersBuilder.buildRules('production'),
			},
		};
	}
	
	public async getDevConfig(): Promise<webpack.Configuration> {
		const config = await this.configLoader.loadConfig()
		return {
			mode: 'development',
			entry: {
				index: path.resolve(process.cwd(), ...config.mainFilePath.split('/')),
			},
			output: {
				path: path.resolve(process.cwd(), ...config.buildDirectory.split('/')),
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
					html: config.htmlTemplatePathFile ? path.resolve(process.cwd(), ...config.htmlTemplatePathFile.split('/')) : path.resolve(__dirname, '../', '../', 'public', 'index.html'),
					favicon: config.faviconPathFile ? path.resolve(process.cwd(), ...config.faviconPathFile.split('/')) : path.resolve(__dirname, '../', '../', 'public', 'favicon.ico'),
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