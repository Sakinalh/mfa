const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8084,
        headers:{
            "Access-Control-Allow-Origin": "*"
        } 
    },
    devtool: 'source-map',
    output: {
        filename: '[name].js',
        crossOriginLoading: 'anonymous'

    },
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'}),
        new ModuleFederationPlugin({
            name: 'header', 
            filename: 'remoteEntry.js',
            remotes: {
                 store: 'store@http://localhost:8085/remoteEntry.js',
                 models: 'models@http://localhost:8085/remoteEntry.js'
            },
            exposes: [
                { './Header': './src/bootstrap.tsx' },
            ],
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, devConfig);