const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry: {
        'pageA': path.join(__dirname, 'src/pageA.js')
        //app: path.join(__dirname, 'app.js')
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['common'],
            minChunk: 2
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ]
                },

            },
            exclude: '/node_modules/'
        }]
    }
}