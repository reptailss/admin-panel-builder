import {ModuleOptions} from "webpack";

export class WebpackLoadersBuilder {
	
	public buildRules(mode: 'production' | 'development'): ModuleOptions['rules'] {
		
		return [
			this.buildBabelLoader(mode),
			this.buildCssLoader(mode),
			this.buildScssLoader(mode),
		]
	}
	
	
	private buildBabelLoader(mode: 'production' | 'development') {
		return {
			test: /\.(tsx|jsx|ts|js)?$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader",
				options: {
					sourceMap: mode === 'development',
					presets: [
						'@babel/preset-env',
						"@babel/preset-typescript",
						[
							"@babel/preset-react",
							{
								runtime: 'automatic',
								development: mode === 'development',
							}
						]
					],
				}
			},
			
		}
	}
	
	private buildCssLoader(mode: 'production' | 'development') {
		return {
			test: /\.css$/,
			use: [
				{
					loader: 'style-loader',
				},
				{
					loader: 'css-loader',
					options: {
						sourceMap: mode === 'development',
						importLoaders: 2,
					},
				},
			],
		}
	}
	
	private buildScssLoader(mode: 'production' | 'development') {
		return {
			test: /\.scss$/,
			use: [
				{
					loader: 'style-loader',
					options: {
						sourceMap: mode === 'development',
					},
				},
				{
					loader: 'css-loader',
					options: {
						sourceMap: mode === 'development',
						importLoaders: 3,
					},
				},
				{
					loader: 'sass-loader',
					options: {
						sourceMap: mode === 'development',
					},
				},
			],
		}
	}
}