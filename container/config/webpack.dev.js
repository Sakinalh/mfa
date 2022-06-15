const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    output: {
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({template: './public/index.html'}),
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:8081/remoteEntry.js',
                cart: 'cart@http://localhost:8082/remoteEntry.js',
                store: 'store@http://localhost:8085/remoteEntry.js',
                models: 'models@http://localhost:8085/remoteEntry.js',
                header: 'header@http://localhost:8084/remoteEntry.js',
                basket: 'basket@http://localhost:8086/remoteEntry.js',

            },
            exposes: [{'./Container' : './src/router.tsx'}]
        })
    ]
}

module.exports = merge(commonConfig, devConfig);