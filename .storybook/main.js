const path = require('path')

module.exports = {
    stories: [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        config.resolve.alias = {
            '@components': path.resolve(__dirname, '../components'),
            '@public': path.resolve(__dirname, '../src/public'),
            '@tokens': path.resolve(
                __dirname,
                '../tokens/build/js/_variables.js'
            ),
            '@utils': path.resolve(__dirname, '../utils')
        }

        return config
    },
}
