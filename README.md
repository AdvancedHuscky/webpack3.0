# webpack 3.0

## Entry:

代码的入口，打包的入口，可以是单个也可以是多个（多页面应用程序），可以是单个文件，可以是数组也可以是对象 entry:{index:'index.js'}
推荐使用对象的写法，可扩展性强

## output:

打包生成的文件（bundle），一个或多个，可以自定义规则

## loaders:

处理文件 转化为模块

## plugins

参与打包整个过程
打包优化和压缩
配置编译时的变量
机器灵活

### 常用 plugins

#### 优化相关

-   CommonsChunkPlugin(removed Instead the optimization.splitChunks)
-   UglifyJsWebpackPlugin(removed default in production mode)

#### 功能相关

-   ExtractTextWebpackPlugin
-   HtmlWebpackPlugin
-   HotModuleReplacementPlugin
-   CopyWebpackPlugin
-   NoEmitOnErrorsPlugin(),(removed default in production mode)
-   ModuleConcatenationPlugin(),(removed default in production mode)
-   DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") })(removed default in production mode)
-   NamedModulesPlugin()(removed default in development mode)
-   new NoErrorsPlugin(),（ deprecated）
-   new NewWatchingPlugin()（ deprecated）

## 名词解释

Chunk 代码块
Bundle 打包过得
Module 模块

## Webpack 命令
