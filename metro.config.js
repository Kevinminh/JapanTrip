// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config')

module.exports = (async () => {
    const config = await getDefaultConfig(__dirname)

    config.resolver.assetExts.push('cjs')

    const { transformer, resolver } = config

    config.transformer = {
        ...transformer,
        babelTransformerPath: require.resolve('react-native-svg-transformer')
    }
    config.resolver = {
        ...resolver,
        assetExts: resolver.assetExts.filter(ext => ext !== 'svg'),
        sourceExts: [...resolver.sourceExts, 'svg']
    }

    return config
})()
