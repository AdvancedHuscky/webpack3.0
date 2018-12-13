import './module/subPageA.js'
import './module/subPageB.js'

//由于subPageA和subPageB中公用module.js可以将它抽出来，单独抽离到pageA中
require.include('./module/module.js')

//import lodash from './lodash.js';
//两种写法都可以，代码分割懒加载
//const lodash = r => require.ensure([], () => r(require('./lodash.js')), 'lodash')//写法一
require.ensure(['./lodash.js'], function () { //写法二
  var lodash = require('./lodash.js');
}, 'lodash');


export default 'pageA'