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
避免在每个文件插入辅助代码，是代码体积过大

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

### 代码分割和懒加载

动态 import，在引入的时候就已经执行
魔法注释
import（/_ webpackChunkName:'subPageA'_/'./subPageA').then(()=>{
console.log(subPageA)
})
import.then()

### 处理 CSS

步骤：引入 ---- CSS modules ---- 配置 less/sass ---- 提取 CSS 代码

#### 引入

##### style-loader(创建标签)

###### options

insertAt(插入位置)
insertInto(插入到 dom)（）
singleton(是否只是用一个 style 标签)
transform（转化，浏览器环境下，插入页面前）（直接改变 css 样式）

style-loader/url (是否以 link 方式引入）
style-loader/useable（引用或不引用，开关）

##### css-loader（让 js import css）

###### options

alias(解析的别名)
importLoader(@import)
Minimize(是否压缩)
modules（启用 css-modules)
localIdentName(给 className 设置别名)

#### css-modules

:local
:global
compose
compose ... from path

#### 配置 less/sass

直接在 style-loader,css-loader 后面增加相应的 loader 即可
注意：这些 loader 同样需要上面两个 loader 做进一步的解析

#### 提取 css 文件

extract-loader
ExtractTextWebpackPlugin
插件最终要将文件提交给 loader 处理所以，不仅要引入 plugin 还要在 loader 中进行定义
提取出来的文件不会自动插入到 html 文件中，需要手动引入

##### extract

对于生产环境构建，建议从 bundle 中提取 CSS，以便之后可以并行加载 CSS/JS 资源。可以通过使用 extract-text-webpack-plugin 来实现，在生产环境模式运行中提取 CSS。

extract({
fallback:{
loader://告诉 webpack 如果不提取的时候使用什么 loader 来处理
},
use:{
//继续使用其他的 loader
}
})

##### plugins

allChunks 是否将所有文件打包到一个文件中

#### PostCSS

a tool for transforming css with javascript

安装 postcss postcss-loader
Autoprefixer(把浏览器的前缀加上)
postcss-cssnano（压缩 css）(等同于 css-loader minimize 选项)
css-next （use tomorrow's CSS syntax,today）(新语法： CSS Variables,custom selectors,cal())
postcss-import
postcss-url
post-assets

### Browserslist

让所有插件公用一套浏览器规则
可以直接在 package.json 中直接引用，也可以使用 .browserslistrc

## Tree Shaking

使用场景：常规优化 引入第三方库的某一个功能
new Webpack.optimize.UglifyJsPlugin()
第三方库：有些支持直接使用上面的插件，有些则不支持，因为不是模块化的写法
以 lodash 为例，实现如何 treeShaking
not working
lodash-es not working
babel-plugin-lodash working
