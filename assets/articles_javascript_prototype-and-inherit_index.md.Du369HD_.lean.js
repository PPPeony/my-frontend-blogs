import{_ as e,c as t,a0 as r,o as i}from"./chunks/framework.p2VkXzrt.js";const u=JSON.parse('{"title":"原型链和继承","description":"","frontmatter":{},"headers":[],"relativePath":"articles/javascript/prototype-and-inherit/index.md","filePath":"articles/javascript/prototype-and-inherit/index.md"}'),o={name:"articles/javascript/prototype-and-inherit/index.md"};function p(l,a,n,s,d,c){return i(),t("div",null,a[0]||(a[0]=[r('<h1 id="原型链和继承" tabindex="-1">原型链和继承 <a class="header-anchor" href="#原型链和继承" aria-label="Permalink to &quot;原型链和继承&quot;">​</a></h1><h3 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h3><p>今天来说一下js继承。 看过《javascript高级程序设计》的yy们应该都知道里面有非常多的继承方式。 什么原型链继承、盗用构造函数继承、组合继承、原型式继承、寄生式继承、寄生式组合继承啦。 看第一遍的时候，这些继承方式把我绕得晕晕乎乎的。 最近想弄懂这几种方式到底有什么不同，于是又看了一遍。有了一些新的感悟，继承这一块也不是什么难题了。</p><h3 id="_1-分类" tabindex="-1">1. 分类 <a class="header-anchor" href="#_1-分类" aria-label="Permalink to &quot;1. 分类&quot;">​</a></h3><p>我们先对这几种继承方式进行分类</p><ol><li><p>需要构造函数的：（原型链继承、盗用构造函数继承）</p><ol><li>只继承方法的（不需要开辟新的内存空间来实例化的，重用函数）：原型链继承</li><li>只继承属性的（需要开辟新的内存空间来实例化的）： 盗用构造函数继承</li><li>既继承属性又继承方法的：原型链继承和盗用构造函数组合在一起就可以实现了（组合继承），比如爸爸和儿子都是人，爸爸作为人类的实例，他有胳膊有腿，爸爸生了儿子之后总不能没胳膊没腿吧，房子只有一个，爸爸能住，儿子也能住。这个例子不一定合适，只是想说明。</li></ol></li><li><p>不需要构造函数的（原型式继承、寄生继承）</p></li><li><p>寄生式组合继承（是为了优化组合继承两次实例化父类构造函数的问题，其实在第二次调用，subType.prototype 的时候我们根本不需要实例化构造函数，我们只需要subType.prototype.<strong>proto</strong> 指向的是superType.prototype就行了，这一步的话就用寄生继承来时实现）</p></li></ol>',6)]))}const m=e(o,[["render",p]]);export{u as __pageData,m as default};
