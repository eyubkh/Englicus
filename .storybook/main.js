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
            '@assets': path.resolve(__dirname, '../src/assets'),
            '@tokens': path.resolve(
                __dirname,
                '../tokens/build/js/_variables.js'
            ),
        }

        return config
    },
}
