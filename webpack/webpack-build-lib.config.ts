import path from 'path';
import {buildPlugins} from "./config/build/buildPlugins";
import {buildLoaders} from "./config/build/buildLoaders";
import webpack from "webpack";


export default ():webpack.Configuration => {
	
	return {
		mode: 'production',
		entry: {
			index: './src/index.ts',
		},
		output: {
			path: path.resolve(__dirname, '../', 'dist'),
			filename: '[name].js',
			library: {
				name: 'admin-panel-compiler',
				type: 'umd',
			},
			globalObject: 'this',
			clean: true,
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js'],
			alias: {
				'@app': path.resolve(__dirname, '../src/app'),
				'@auth': path.resolve(__dirname, '../src/auth'),
				'@authProvider': path.resolve(__dirname, '../src/authProvider'),
				'@fields': path.resolve(__dirname, '../src/fields'),
				'@contentManager': path.resolve(__dirname, '../src/contentManager'),
				'@client': path.resolve(__dirname, '../src/client'),
				'@accessManager': path.resolve(__dirname, '../src/accessManager'),
				'@formManager': path.resolve(__dirname, '../src/formManager'),
				'@access': path.resolve(__dirname, '../src/access'),
				'@requests': path.resolve(__dirname, '../src/requests'),
			},
		},
		plugins: buildPlugins({
			mode: 'production',
			envType: 'production',
		}),
		module: {
			rules: buildLoaders({
				mode: 'production'
			}),
		},
	};
	
}

