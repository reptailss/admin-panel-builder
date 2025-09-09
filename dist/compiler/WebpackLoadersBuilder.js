"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebpackLoadersBuilder = void 0;
class WebpackLoadersBuilder {
    buildRules(mode) {
        return [
            this.buildBabelLoader(mode),
            this.buildCssLoader(mode),
            this.buildScssLoader(mode),
        ];
    }
    buildBabelLoader(mode) {
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
        };
    }
    buildCssLoader(mode) {
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
        };
    }
    buildScssLoader(mode) {
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
        };
    }
}
exports.WebpackLoadersBuilder = WebpackLoadersBuilder;
//# sourceMappingURL=WebpackLoadersBuilder.js.map