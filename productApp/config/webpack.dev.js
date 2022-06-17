const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        headers:{
            "Access-Control-Allow-Origin": "*"
        } 
    },
    output: {
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'}),
        new ModuleFederationPlugin({
            name: 'products', 
            filename: 'remoteEntry.js',
            remotes: {
                 store: 'store@http://localhost:8085/remoteEntry.js',
                 models: 'models@http://localhost:8085/remoteEntry.js',
                 container: 'container@http://localhost:8080/remoteEntry.js'
            },
            exposes: [
                { './ProductsApp': './src/bootstrap.tsx' },
            ],
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, devConfig);