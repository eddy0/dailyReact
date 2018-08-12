const path = require('path')
module.exports = (env) => {
    return {
        mode: env.mode || 'development',
        entry: 'src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
            ]
        }
    }
}