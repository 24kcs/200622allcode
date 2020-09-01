/*
iterator 是一种接口机制,为各种不同的数据结构提供统一的访问机制
  1. 作用:
    - 为各种数据结构,提供一个统一的，简便的访问接口
    - 使得数据结构的成员能够按某种次序排列
    - ES6创造了一种新的遍历命令,for..of循环,Iterator接口主要提供for...of消费
  2. 工作原理
    - 创建一个指针对象(遍历器对象),指向数据结构的起始位置
    - 第一次调用next方法,指针自动指向数据结构的第一个成员
    - 接下来不断调用next方法,指针会一直往后移动,知道指向最后一个成员
    - 每调用next方法返回的是一个包含value和done的对象,{value:当前成员的值,done:布尔值}
    - value表示当前成员的值,done对应的布尔值表示当前的数据的结构是否遍历结束
    - 当遍历结束的时候返回的value值是undefine,done值为false
    - 原生具备iterator接口的数据(可用for of遍历)
    - 扩展理解:
      - 当数据结构上部署了Symbol.iterator接口,该数据可以用for-of遍历
      - 当使用for of去遍历目标数据的时候,该数据会自动去找Symbol.iterator
    - Symbol.iterator属性指向对象的默认遍历器方法(iterator接口)
      - Array
      - arguments
      - set容器
      - map容器
      - String
      ....


Generator函数
  1. 概念:
    - ES6提供的解决异步编程的方案之一
    - Generator函数是一个状态,内部封装了不同状态数据
    - 用来生成遍历对象
    - 可暂停函数(惰性求值),yield可暂停,next方法可启动,每次返回的是yield后的表达式结果
  2. 特点:
    - function 与函数名之间有一个星号
    - 内部用yield表达式来定义不同的状态
    - 例如:
      function * generatorExample(){
        let result = yield 'hello'; // 状态值为hello
        yield 'generator'; // 状态值为generator
      }
    - generator函数返回的是指针对象(接iterator),而不会执行函数内部逻辑
    - 调用next方法函数内部逻辑开始执行,遇到yield表达式停止,返回{value:yield后的表达式结果/undefined,done:true}
    - 再次调用next方法会从上一次停止时的yield处开始,直到最后
    - yield语句返回结果通常为undefine,当调用next方法时传参内容会作为启动时yield语句的返回值

*/