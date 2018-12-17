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
                                require('postcss-cssnext')(), //使用下一代的新的css技术，语法
                                require('postcss-sprite')({
                                    spritePath: 'dist/assets/imgs/sprites', //输出路径
                                    retina: true //处理苹果retina 屏幕，高清的视网膜屏幕，需要更改图片的名称 1@2x.png 2@2x.jpg
                                })
                            ]
                        }
                    }
                ]
            },
            {
                {
                    test: /\.jpg$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            name: '[name].min.[ext]',
                            limit: 10000,
                            publicPath: '',
                            outputPath: './dist',
                            useRelativePath: true
                        }
                    }, {
                        loader: 'image-loader',
                        options: {
                            pngquant: {
                                quality: 80
                            }
                        }
                    }]
                }
            },
            {
                test: /\.(eot|woff2|woff|ttf|svg)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name]-[hash:5].[ext]',
                        publicPath: '',
                        limit: 10000,
                        publicPath: '',
                        outputPath: './dist',
                        useRelativePath: true
                    }
                }]
            }

        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin({
            filename: '[name].min.css'
        })
    ]
}