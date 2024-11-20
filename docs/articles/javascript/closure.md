# 闭包
### 1. 什么是闭包? 什么是词法环境？
>  A **closure** is the combination of a function bundled together (enclosed) with references to its surrounding state (the **lexical environment**). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
>  
>  A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created. 
>  
>  A **Lexical Environment** is a specification type used to define the association of Identifiers to specific variables and functions based upon the lexical nesting structure of ECMAScript code.


**示例1:**

```js

function init() {
  var name = "Mozilla"; // name 是一个被 init 创建的局部变量
  function displayName() {
    // displayName() 是内部函数，一个闭包
    alert(name); // 使用了父函数中声明的变量
  }
  displayName();
}
init();

```


**示例2:**
```js
function outerFunction() { 
    let largeData = new Array(1000000).fill('data'); 
    let c = 1; 
    return function innerFunction() { 
        return largeData; 
    } 
} 
```

**问： 父函数中的变量c会在闭包内吗？**

答：在这个例子中，虽然变量`c`在父函数`outerFunction`中定义，但它并没有在闭包`innerFunction`中被引用或使用，所以它不会被包含在闭包的环境中。

闭包会“记住”它的创建环境中所有被引用的变量，即使这个环境已经不存在了。但是，如果一个变量在闭包中没有被引用，那么这个变量就不会被闭包“记住”，当父函数执行完毕后，这个变量就会被垃圾收集器回收。

所以，虽然`c`在`outerFunction`中定义，但它不会在闭包`innerFunction`中存在。如果你想让`c`在闭包中存在，你需要在`innerFunction`中引用它，如下所示：

```js
function outerFunction() {
    let largeData = new Array(1000000).fill('data');
    let c = 1;
    return function innerFunction() {
        return largeData + c;
    }
}
```

在这个修改后的例子中，`c`在闭包`innerFunction`中被引用，所以它会被闭包“记住”，即使`outerFunction`执行完毕后，`c`也不会被垃圾收集器回收。

### 2. 关于闭包的一个疑惑

父函数返回了闭包，父函数执行完了，父函数的执行上下文会销毁吗？

在 JavaScript 中，当一个函数返回了一个闭包（也就是一个内部函数），那么这个内部函数会保留对其父函数作用域中的变量的引用。这就是所谓的 "闭包"。即使父函数已经执行完毕，这些变量仍然可以被内部函数访问，因为它们被内部函数的作用域链所引用。

所以，即使父函数的执行上下文已经从执行栈中弹出，但只要内部函数还在使用这些变量，这些变量就不会被垃圾回收机制回收，它们的值会被保留下来。

这就是为什么闭包可以 "记住" 它们被创建时的环境。这是 JavaScript 中非常强大的一个特性，但也需要注意，如果不正确地使用闭包，可能会导致内存泄漏。

### 3. 闭包的作用

在JavaScript中，闭包是一种可以访问其自身作用域、外部函数作用域以及全局作用域变量的函数。闭包的主要作用有以下几点：

1.  **数据封装和私有化**：闭包可以用来隐藏和保护内部状态，只暴露必要的接口。这是实现JavaScript模块模式的关键。
1.  **创建数据的私有版本**：每次函数被调用时，闭包都可以为每个函数创建私有的变量和方法。这对于实现工厂和构造函数非常有用。
1.  **实现公有变量**：闭包可以在函数之间共享变量，而不必将它们作为全局变量。
1.  **记忆（缓存）** ：闭包可以用于存储计算结果，以便在后续调用中重用，这种技术被称为记忆或缓存。

### 4. 参考
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures