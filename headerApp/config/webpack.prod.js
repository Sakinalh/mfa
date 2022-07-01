const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/header/latest/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'header',
            remotes: {
                store: `store@${domain}/store/remoteEntry.js`,
                models: `models@${domain}/models/remoteEntry.js`
           },
            shared: packageJson.dependencies,
            filename: 'remoteEntry.js',
            exposes: [
                { './Header': './src/bootstrap.tsx' },
            ],
    })]
}

module.exports = merge(commonConfig, prodConfig);