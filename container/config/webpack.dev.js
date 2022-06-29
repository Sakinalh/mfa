const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
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
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:8081/remoteEntry.js',
                cart: 'cart@http://localhost:8082/remoteEntry.js',
                store: 'store@http://localhost:8085/remoteEntry.js',
                models: 'models@http://localhost:8085/remoteEntry.js',
                header: 'header@http://localhost:8084/remoteEntry.js',
            },
            exposes: [{'./Container' : './src/router.tsx'}]
        })
    ]
}

module.exports = merge(commonConfig, devConfig);