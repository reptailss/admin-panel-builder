import {Mode} from "../types/types";


export function buildBabelLoader({mode}: {
	mode: Mode
}) {
	
	
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
