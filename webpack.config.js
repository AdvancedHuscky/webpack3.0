const path = require('path')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: 'style-loader',
                        options: {
                            singleton: true,
                            //transform:'./css.transform.js'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            modules: true,
                            localIdentName: '[path][name]_[local]-[hash:5].css'
                        }
                    }
                ]
            },
            {
                test: /\.sass/,
                fallback: {
                    loader: 'sass-loader',
                    options: {
                        singleton: true,
                        //transform:'./css.transform.js'
                    }
                },
                use: [{
                        loader: 'style-loader',
                        options: {
                            singleton: true,
                            //transform:'./css.transform.js'
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true,
                            modules: true,
                            localIdentName: '[path][name]_[local]-[hash:5].css'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')(),
                                require('postcss-cssnext')(),
                            ]
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin({
            filename: '[name].min.css'
        })
    ]
}