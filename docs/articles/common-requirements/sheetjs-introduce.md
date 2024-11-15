# 使用sheejs来操作excel表格（简单入门）

官方网站<https://docs.sheetjs.com/docs/>

仓库地址<https://git.sheetjs.com/sheetjs/sheetjs>

为了方便自己使用，做了一下总结

### 1. 介绍

#### 1.1 sheetjs能干什么

> SheetJS CE
>
> SheetJS Community Edition offers battle-tested open-source solutions for extracting useful data from almost any complex spreadsheet and generating new spreadsheets that will work with legacy and modern software alike.

sheejs 社区版，既可以从复杂的表单中抽取出有用的数据，也可以生成可以在老旧的或者现代的软件中工作的新的表单。（这意味着可以实现在线excel了😯）

#### 1.2 操作系统和浏览器兼容性

这个网站有测试报告，可以去看
<https://app.saucelabs.com/open_sauce/user/sheetjs/tests?ownerId=myorganization&ownerType=organization&ownerName=My+organization&start=last7days>

截了几张图将就看一下

pc
![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/5b192d268d7c42a8809a9a538079b2c9~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgdXNlcjM5NzUxNTUxMTc5NTA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMTU4Mjk0ODg2MzcwOTAyMSJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1732255415&x-orig-sign=uZ0zOb9BgG9bZambSo0bO8qFzLs%3D)

移动设备
![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/2c7524438bd247c7b1c6d6a620a4b49e~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgdXNlcjM5NzUxNTUxMTc5NTA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMTU4Mjk0ODg2MzcwOTAyMSJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1732255415&x-orig-sign=FjZNJBkRfjWMJxawy7iQGVkwN4A%3D)

#### 1.3 支持的文件格式

注意看呀，有的是单箭头，有点双箭头。

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/277612e2cd284335a885d1dd641ac503~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgdXNlcjM5NzUxNTUxMTc5NTA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMTU4Mjk0ODg2MzcwOTAyMSJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1732255415&x-orig-sign=QCM136mg2gRuR%2F7HFgGSO9fgwuw%3D)

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/9843aa66ea1848be8e0d4520ee9f2bc8~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgdXNlcjM5NzUxNTUxMTc5NTA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMTU4Mjk0ODg2MzcwOTAyMSJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1732255415&x-orig-sign=GP3RsbdaOWz4XPVaOtiicsXcnwU%3D)

### 2. 快速上手

这是官网的目录。

先看overview了解sheetjs能干什么，可以在线体验一下它的功能。

前端项目里使用的话就可以先看frameworks and bundlers目录和Demos目录，选择自己用的框架去看（我用是vue）

![image.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/bb5481c19c004e419bf3781a7ff8c7fe~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAgdXNlcjM5NzUxNTUxMTc5NTA=:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiMTU4Mjk0ODg2MzcwOTAyMSJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1732255415&x-orig-sign=lxPzai8u5ggYK1hqpUYqVXUuh%2Bw%3D)

### 3. 项目里实际使用

#### 3.1 安装

安装脚本（我用的是yarn包管理工具）

```js
yarn remove xlsx
yarn add https://cdn.sheetjs.com/xlsx-0.20.3/xlsx-0.20.3.tgz
```

安装成功后的package.json

```json
 "dependencies": {
    "xlsx": "https://cdn.sheetjs.com/xlsx-0.20.3/xlsx-0.20.3.tgz"
  }
```

#### 3.2 使用上的问题

这样导包的时候有问题（跟着官网教程做的，为什么会有这样的问题，不太清楚怎么解决）

```js
import { read, utils, writeFile } from 'xlsx';
```

> Module not found: Error: Can't resolve '[https://cdn.sheetjs.com/xlsx-0.20.3/xlsx-0.20.3.tgz'](<> "https://cdn.sheetjs.com/xlsx-0.20.3/xlsx-0.20.3.tgz'") in '/Users/workspace/projects/sheetjs-test/src/utils'

我把它改成相对路径了（一个workaround）

```js
import { read, utils, writeFile } from '../../node_modules/xlsx';
```

有使用经验的友友们可以讨论一下。如果文章有问题，欢迎指正。
