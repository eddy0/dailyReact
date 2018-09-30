const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
    return {
        mode: env || 'development',
        entry: './src/index.js',
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
        },
        devServer: {
            contentBase: path.resolve(__dirname, 'dist'),
            historyApiFallback: true,
            compress: true,
            hot: true,
        },
        module: {
            rules: [
                {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
                {test: /\.css$/, use: [miniCssExtractPlugin.loader, 'css-loader']},
                {test: /\.(png|jpg|jpeg)/, use: 'url-loader'},
                {
                    test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
                    use: 'file-loader',
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
            new miniCssExtractPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(),
        ],
    }
}