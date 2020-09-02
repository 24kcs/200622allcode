/*

1.ECMA组织:欧洲计算机制造协商会,制定和发布的脚本语言规范
2.ECMAscript是基于Netscape javaScript的一种标准脚本语言。
3.JavaScript包含3个部分:
  1)ECMAScript核心(JS标准语法)
  2)浏览器端的扩展
    BOM(浏览器对象模型)
    DOM(文档对象模型)
  3)服务器端的扩展
    Node.js
4.ES的几个重要版本
  ES5:09年发布
  ES6:2015年发布,也叫ECMA2015
  ES7:2016年发布,也叫ECMA2016


ES5 
严格模式
介绍
ES5 除了正常运行模式（又称为混杂模式），还添加了第二种运行模式："严格模式"（strict mode）。
严格模式顾名思义，就是使 JavaScript 在更严格的语法条件下运行。


作用
1. 消除 JavaScript 语法的一些不合理、不严谨之处，减少一些怪异行为
2. 消除代码运行的一些不安全之处，保证代码运行的安全
3. 为未来新版本的 JavaScript 做好铺垫


使用
  - 在全局或函数的第一条语句定义为: 'use strict'
  - 如果浏览器不支持，只解析为一条简单的语句, 没有任何副作用
  全局使用严格模式
  'use strict';
  girl = '迪丽热巴';
  函数中使用严格模式
  function main(){
    'use strict';
    boy = '吴亦凡';
  }
  main();

语法和行为改变
  - 必须用 var 声明变量，不允许使用未声明的变量
  - 禁止自定义的函数中的 this 指向 window
  - 创建 eval 作用域
  - 对象不能有重名的属性（Chrome 已经修复了这个 Bug，IE 还会出现）
  - 函数不能有重复的形参
  - 新增一些保留字, 如: implements interface private protected public

Object.create(prototype, [descriptors])
Object.create 方法可以以指定对象为原型创建新的对象，同时可以为新的对象设置属性, 并对属性进行描述
- value : 指定值
- writable : 标识当前属性值是否是可修改的, 默认为 false
- configurable：标识当前属性是否可以被删除 默认为 false
- enumerable：标识当前属性是否能用for in 枚举 默认为 false
- get:   当获取当前属性时的回调函数
- set:   当设置当前属性时

Object.defineProperties(object, descriptors)
  直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
  - object     要操作的对象
  - descriptors     属性描述
  - get  作为该属性的 getter 函数，如果没有 getter 则为undefined。函数返回值将被用作属性的值。
  - set  作为属性的 setter 函数，如果没有 setter 则为undefined。函数将仅接受参数赋值给该属性的新值。

Array的扩展方法
  - Array.prototype.indexOf(value):得到数组中的某个数据的第一个下标,用来找数据的
  - Array.prototype.lastIndexOf(value):得到数组中某个数据的最后一个小标
  - Array.prototype.forEach(function(item,index){}):遍历数组
  - Array.prototype.map(function(item,index){}):遍历数组,返回新数组
  - Array.prototype.filter(function(item,index){}):遍历数组,过滤后的数组
  Function的扩展方法

- call 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数
- apply 方法调用一个具有给定 this 值的函数，以及作为一个数组（或类似数组对象）提供的参数
- bind 同 call 相似，不过该方法会返回一个新的函数，而不会立即执行

*/