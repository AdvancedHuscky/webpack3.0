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

## Babel 相关插件

### Presets

相当于 babel 的辅助工具,帮助配置 babel,根据配置的目标环境自动采用需要的 babel 插件

### polyFill

--save
垫片，填充器
全局，就可以在全局进行使用，为开发应用引用（网站，app）而不是为框架使用
es678 的兼容性
Generator
Set
Map
Array.form

### Runtime Transform

npm install babel-plugin-transform-runtime --save-dev
npm install babel-runtime -save
局部垫片
为了来开发框架准备

### babel 的 polyfill 和 runtime 的区别

具体项目还是需要使用 babel-polyfill，只使用 babel-runtime 的话，实例方法不能正常工作（例如 "foobar".includes("foo")）；

JavaScript 库和工具可以使用 babel-runtime，在实际项目中使用这些库和工具，需要该项目本身提供 polyfill；

官网是这么说的，那些需要修改内置 api 才能达成的功能，譬如：扩展 String.prototype，给上面增加 includes 方法，就属于修改内置 API 的范畴。这类操作就由 polyfill 提供。

## 打包公共代码

commonChunkPlugin
options.name or options.names
options.filename
options.minChunks

### 场景

单页应用
单页应用+第三方依赖
多页应用+第三方依赖+webpack 生成代码
