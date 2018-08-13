const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = (env) => {
    return {
        mode: env.mode,
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
                {test: /\.css$/, use: ['style-loader', 'css-loader']}
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
            })
        ]
        
    }
}