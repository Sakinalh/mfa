const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/store/latest/'
    },
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'}),
        new ModuleFederationPlugin({
            name: 'store', 
            filename: 'remoteEntry.js',
            exposes: [
                { './StoreApp': './redux/store' },
                {'./Models': './models/Product.ts'}
            ],
            shared: deps
        })
        ]
}

module.exports = merge(commonConfig, prodConfig);