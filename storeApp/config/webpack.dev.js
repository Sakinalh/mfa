const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8085
    },
    output: {
        filename: '[name].js'
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

module.exports = merge(commonConfig, devConfig);