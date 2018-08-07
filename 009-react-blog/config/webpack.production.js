// 用来生成 link file 的文件, style loader 用来生成到到 head 里面
const miniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = () => ({
    output: {
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
        ]
    },
    plugins: [
        new miniCssExtractPlugin()
    ]
})