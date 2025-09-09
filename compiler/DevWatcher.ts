import webpack from 'webpack'

import WebpackDevServer from 'webpack-dev-server'
import {WebpackConfigBuilder} from "./WebpackConfigBuilder"
import {ConfigLoader} from "./ConfigLoader";
import path from "path";

export class DevWatcher {
	private readonly adminBuilderWebpackConfig = new WebpackConfigBuilder()
	private readonly configLoader = new ConfigLoader()
	
	public async run(): Promise<void> {
		const webpackConfig = await this.adminBuilderWebpackConfig.getDevConfig()
		const config = await this.configLoader.loadConfig()
		
		const compiler = webpack(webpackConfig)
		const server = new WebpackDevServer(
			{
				port: config.hmrServerPort || 3000,
				open: true,
				historyApiFallback: true,
				hot: true,
				static: {
					directory: webpackConfig.output?.path || ''
				},
			},
			compiler
		);
		
		await server.start()
	}
}
