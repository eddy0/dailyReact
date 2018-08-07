const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const webpackMerge = require('webpack-merge')
const modeConfig = (env) => require(`./config/webpack.${env}`)(env)

module.exports = ({mode = 'production', presets = []}) => {
    return webpackMerge({
            mode: mode,
            entry: './client/src/index.js',
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        use: 'babel-loader',
                        exclude: /node_moduels/
                    },
                    {
                        test: /\.(jpg|jpeg|gif)/,
                        use: [
                            {
                                loader: 'url-loader',
                                options: {
                                    limit: 5000,
                                }
                            }],
                    },
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: './server/dist/html/index.html',
                    filename: 'index.html'
                }),
                new webpack.ProgressPlugin()
            ]
        },
        modeConfig(mode),
    )
}