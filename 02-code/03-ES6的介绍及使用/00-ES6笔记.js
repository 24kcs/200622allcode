/*
let 声明特点
  - 不允许重复声明
  - 块级作用域 全局作用域 函数作用域 eval作用域
  - 不存在变量声明
  - 不影响作用域链

const 用来声明一个常量(和let一样,只是不能改值而已)
  - 格式
  - 声明的时候一定要有初始值
  - 常量的名称一般[大写] 潜规则
  - 不能修改常量的值
  - 不允许重复声明
  - 块级作用域
  - 关于数组和对象的元素的修改
  
解构赋值
  1. 理解:从对象或数组中提取数据,并赋值给变量(多个)
  2. 对象的解构赋值: let {m,n}={n:'a',m:'b'}
  3. 数组的解构赋值: let [a,b]=[10,'测试']
  4. 用途: 给多个形参赋值
  5. 注意:解构赋值对象的时候,写的变量名字一定是对象中存在的属性名字,想要什么属性就写什么属性

模版字符串
  1. 作用:简化字符串的拼接
  2. 模版字符串必须用 `` 包含
  3. 变化的部分使用 ${xxx}定义

简化对象的写法
  1. 省略同名的属性值
  2. 省略方法的function


箭头函数
  1. 作用: 定义匿名函数
  2. 基本语法: ()=>{console.log('xxxx')}
  3. 一个参数: msg=> msg+2
  4. 多个参数: (m,n)=>m+n
  5. 函数体不用大括号:默认有返回结果
  6. 函数体如果有多个语句,需要使用{}包裹,如果内部有需要返回的值,则手动return
  7. 使用场景: 多用来定义回调函数
  8. 不能作为构造函数使用
  9. 箭头函数的特定(箭头函数的this是不能改变的):
    - 简洁
    - 箭头函数没有自己的this,箭头函数的this不是调用的时候决定的,而是在定义的时候处在自己对象就是它的this
    - 扩展理解: 箭头函数的this看外层的是否有函数,如果有,外层函数的this就是内部箭头函数的this,如果没有则this是window
  10. 箭头函数中arguments不能使用



ES6 允许给函数形参赋值初始值
  形参可以有默认值,一般默认值靠后(不建议靠前设置默认值)
  与解构赋值结合使用 解构赋值的形式先后顺序不影响
ES6中引入rest参数 ,代替arguments,

ES6中的延展运算符(拆包/打包)
... 将数组或者对象进行拆包或者打包的操作



Symbol:
  1. ES5中对象的属性名都是字符串,容易造承重名,污染环境
  2. 概念:ES6中的添加了一种原始数据类型Symbol(已有的原始数据类型:String,Number,Boolean,null,undefined,对象)
  3. 特点:
    - Symbol 属性对应的值是唯一的,解决命名冲突问题
    - Symbol 值不能与其他数据进行计算,包括同字符串拼串
    - for in , for of 遍历时不会遍历symbol 属性 
  4. 使用:
    - 调用Symbol 函数得到symbol 值
    - let symbol =Symbol()
    - let obj ={}
    - obj[symbol]='hello';
  5. 传参标识
    - let symbol = Symbol('one')
    - let symbol2 = Symbol('two')
    - console.log(symbol) // Symbol('one')
    - console.log(symbol2) // Symbol('two')
  6. 定义常量标识
    - 可以定义常量,就是标识
    - const person_key = Symbol('person_key')
    - console.log(person_key)
  7. 内置Symbol值
    - 除了定义自己使用的Symbol值以外,ES6还提供了11个内置的Symbol值,指向语言内部使用的方法
    - Symbol.iterator
    - 对象的Symbol.iterator属性,指向该对象的默认遍历器方法(很快就讲了)
  8. https://2ality.com/2014/12/es6-symbols.html 遍历Symbol属性数据



*/