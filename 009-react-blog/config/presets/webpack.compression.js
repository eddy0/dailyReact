const compressWebpackPlugin = require('compression-webpack-plugin')
module.exports = () => ({
    plugins: [
        new compressWebpackPlugin()
    ]
})