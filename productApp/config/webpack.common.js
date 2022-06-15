const path = require('path')

module.exports = {
    module: {
        rules: [{
                    test: /\.(jsx|js)$/,
                    include: path.resolve(__dirname, 'src'),
                    exclude: /node_modules/,
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-react', ['@babel/preset-env', {"target": "defaults"}]],
                            plugins: ['@babel/plugin-transform-runtime'] }
                    }],
                 },
                 { 
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                 }
    
    ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
}