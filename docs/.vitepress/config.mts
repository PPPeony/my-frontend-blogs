import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的前端小窝",
  description: "用来记录自己在前端上的学习",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/readme' },
      { text: 'Docs', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: '你好👋',
        link: '/readme'
      },
      {
        text: 'HTML',
        base: '/articles/html/',
        items: [
          { text: 'HTML 5', link: 'html5.md' },
        ]
      },
      {
        text: 'JavaScript',
        base: '/articles/javascript/',
        items: [
          { text: '闭包', link: 'closure' },
          { text: '作用域和执行栈', link: 'scope-and-excution-stack' },
          { text: '原型与继承', link: 'prototype-and-extend' },
          { text: '垃圾回收', link: 'garbage-collection' },
          { text: 'this指向问题', link: 'this' }
        ]
      },
      {
        text: 'CSS',
        base: '/articles/css/',
        items: [
          { text: '居中布局', link: 'center-layout' },
          { text: 'flex布局', link: 'flex-layout' },
          { text: '响应式', link: 'reponsive-layout' },
        ]
      },
      {
        text: '浏览器',
        base: '/articles/browser/',
        items: [
          { text: '渲染机制', link: 'render-mechanism' },
          { text: '事件循环', link: 'event-loop' },
          { text: '浏览器缓存', link: 'browser-cache' },
          { text: '跨域处理', link: 'cors-resolve' }
        ]
      },
      {
        text: '开发框架',
        base: '/articles/framework/',
        items: [
          {
            text: 'vue',
            base: 'vue',
            items: [{
              text: '源码解析',
              items: [{
                text: '响应式系统',
                link: 'reactive-system'
              }, {
                text: 'diff算法',
                link: 'diff-algorithm'
              }]
            }]
          },
          // {
          //   text: 'react',
          //   base: 'react',
          //   items: [
          //     {
          //       text: '应用', link: ''
          //     },
          //     {
          //       text: '', link: ''
          //     }
          //   ]
          // },
          // {
          //   text: 'miniprogram',
          //   base: 'miniprogram',
          //   items: [{
          //     text: '微信小程序',
          //     link: '',
          //   }, {
          //     text: 'taro',
          //     link: '',
          //   }, {
          //     text: 'uniapp',
          //     link: '',
          //   }]
          // },
        ]
      },
      {
        text: '构建工具',
        base: '/articles/build-tools/',
        items: [
          { text: 'webpack', link: 'webpack' },
          { text: 'vite', link: 'vite' },
        ]
      },
      {
        text: 'Node',
        base: '/articles/node/',
        items: [
          { text: '项目里的package.json到底是干什么的', link: 'package-json' },
          { text: 'commonjs', link: 'commonjs' },
          { text: '事件循环', link: 'event-loop' },
          { text: '后端框架koa', link: 'koa' },
        ]
      },
      {
        text: '常见的业务需求',
        items: [
          { text: '大文件上传', link: 'big-file-upload' },
          { text: '懒加载列表', link: 'list-lazy-load' },
          { text: '浏览器指纹', link: 'browser-footprint' },
          { text: '处理excel', link: 'sheetjs-introduce' },
          { text: '主题色切换', link: 'theme-toggle' },
          { text: '搜索框', link: 'search-input' },
        ]
      },
      {
        text: '应用安全',
        base: '/articles/web-secure/',
        items: [
          { text: '综合方案', link: 'comprehensive-solution' },
          { text: 'xss攻击', link: 'xss-attack' },
          { text: 'crsf攻击', link: 'crsf-attack' }
        ]
      },
      {
        text: '工作踩坑',
        base: '/articles/work-traps',
        items: [
          { text: '微信小程序开发者工具', link: '/wxmp-dev-tool' },
          { text: '淘宝小程序加载sdk有问题', link: '/not-display-in-tobao-miniprogram' },
          { text: 'node-sass需要依赖的python环境无法安装', link: '/node-sass' }
        ]
      },
      {
        text: '英语学习',
        base: '/articles/english-leanring',
        items: [
          { text: '学习方法', link: 'learning-methods' },
        ]
      },
      {
        text: 'vscode配置',
        base: '/articles/vscode',
        items: [
          { text: '好用的vsode插件', link: 'index' },
     
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PPPeony/my-frontend-blogs' }
    ]
  }
})
