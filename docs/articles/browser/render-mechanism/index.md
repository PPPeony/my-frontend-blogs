# 浏览器的渲染机制

你是否好奇你在浏览器地址栏里输入的url

其实主要的过程有以下极点
1. 像dns服务器请求查询目标域名的ip地址
2. 拿到ip地址之后，电脑和电脑之间就可以经过三次握手简历tcp连接
3. 但是现在通常用的都是https协议来进行传输数据。所以想要建立tls协商，浏览器和服务器之间通信加密的协议。
4. 准备工作做好之后才能通过http协议将服务器的数据传输的浏览器。
5. html文档搞到了，浏览器里的进程，进程里的线程就开始工作了。
6. 扫描器先快速的扫描一下文档到底外链了哪些资源，又在哪个地方，让后就让网络进程去获取。
7. render线程去

# 参考

https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work
https://developer.chrome.com/blog/inside-browser-part1