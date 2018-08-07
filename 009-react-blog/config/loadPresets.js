const webpackMerge = require('webpack-merge')

const applyPresets = env => {
    const {presets} = env
    const mergedPresets = [].concat(...[presets])
    const mergedConfigs = mergedPresets.map((name) => require(`./presets/webpack.${name}`)(env))
    return webpackMerge({}, ...mergedConfigs)
}

module.exports = applyPresets