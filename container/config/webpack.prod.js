const {merge} = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');


const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [{
        name: 'container',
        remotes: {
            basket: 'basket@http://localhost:',
            product: 'product@http://localhost:8085/remoteEntry.js',
            header: 'header@http://localhost:',
            store: 'store@http://localhost:8085/remoteEntry.js',
        }

    }]
}