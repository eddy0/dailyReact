module.exports = () => ({
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_moduels/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ]
    }
})