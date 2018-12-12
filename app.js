//commonJs
var minus = require('./minus.js')

//ES6
import add from './add.js'

//AMD
//异步加载模块，打包之后会形成两个bundle
require(['./multi'], function (multi) {
    console.log('multi:2*3', multi(2, 3))
})

console.log('add: 24+17', add(24, 17));
console.log('minus:24-17 ', minus(24, 17));