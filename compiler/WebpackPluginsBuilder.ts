import {Configuration, DefinePlugin} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

export class WebpackPluginsBuilder {
	
	public buildPlugins({
							mode,
							htmlPaths,
							publicPath
						}: {
		mode: 'production' | 'development'
		htmlPaths: {
			html: string
			favicon: string
		}
		publicPath: string
	}): Configuration['plugins'] {
		
		const plugins: Configuration['plugins'] = [
			new MiniCssExtractPlugin(),
			new NodePolyfillPlugin(),
			new HtmlWebpackPlugin({
				template: htmlPaths.html,
				favicon: htmlPaths.favicon,
			}),
			new DefinePlugin({
				"_PUBLIC_PATH": JSON.stringify(publicPath),
			}),
		]
		
		if (mode === 'development') {
			plugins.push(new ForkTsCheckerWebpackPlugin())
		}
		
		return plugins;
	}
}