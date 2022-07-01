const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/products/latest/'
    },
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'}),
        new ModuleFederationPlugin({
            name: 'products', 
            filename: 'remoteEntry.js',
            remotes: {
                 store: `store@${domain}/store/remoteEntry.js`,
                 models: `models@${domain}/models/remoteEntry.js`,
                 container: `container@${domain}/container/remoteEntry.js`
            },
            exposes: [
                { './ProductsApp': './src/bootstrap.tsx' },
            ],
    })]
}

module.exports = merge(commonConfig, prodConfig);