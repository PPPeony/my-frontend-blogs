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
        text: 'Read Me',
        items: [
          {
            text: 'Read Me',
            link: '/readme'
          }
        ]
      },
      {
        text: 'HTML',
        items: [
          { text: 'HTML 5', link: '/articles/html/html5.md' },
        ]
      },
      {
        text: 'JavaScript',
        base: '/articles/javascript/',
        items: [
          { text: '闭包', link: 'closure' },
          { text: '作用域和执行栈', link: 'scope-and-excution-stack' },
          { text: '原型与继承', link: 'prototype-and-extend' },
          { text: '垃圾回收', link: 'garbage-collection' }
        ]
      },
      {
        text: 'CSS',
        base: '/articles/css/',
        items: [
          { text: '居中布局', link: 'center-layout' },
          { text: '响应式', link: 'reponsive-layout' },
          { text: 'Upload Big File', link: '/upload-big-file' }
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
            items: [{
              text: '源码解析',
              items: [{
                text: '响应式系统',
                link: 'reactive-system'
              }, {
                text: 'diff算法',
                link: 'diff'
              }]
            }]
          },
          {
            text: 'react',
            items: [
              {
                text: '应用', link: ''
              },
              {
                text: '', link: ''
              }
            ]
          },
          {
            text: 'miniprogram',
            items: [{
              text: '微信小程序',
              link: '',
            }, {
              text: 'taro',
              link: '',
            }, {
              text: 'uniapp',
              link: '',
            }]
          },
        ]
      },
      {
        text: 'Vue 源码分析',
        base: '/articles/vue/',
        items: [
          { text: '响应式系统', link: 'reactive-system' },
          { text: 'diff算法', link: 'diff' },
        ]
      },
      {
        text: '构建工具',
        base: '/articles/build-tools/',
        items: [
          { text: 'webpack', link: '/webpack' },
          { text: 'vite', link: '/vite' },
        ]
      },
      {
        text: 'Node',
        base: '/articles/node/',
        items: [
          { text: 'commonjs', link: 'commonjs' },
          { text: '事件循环', link: 'event-loop' },
          { text: '后端框架koa', link: 'koa' },
          { text: '项目里的package.json到底是干什么的', link: 'package-json' },
        ]
      },
      {
        text: '常见的业务需求',
        items: [
          { text: '大文件上传', link: 'big-file-upload' },
          { text: '懒加载列表', link: 'list-lazy-load' },
          { text: '', link: '/upload-big-file' }
        ]
      },
      {
        text: '应用安全',
        items: [
          { text: 'xss攻击', link: 'xss-attack' },
          { text: 'crsf攻击', link: 'crsf-attack' }
        ]
      },
      {
        text: '工作踩坑',
        items: [
          { text: '微信小程序开发者工具', link: '/markdown-examples' },
          { text: '淘宝小程序加载sdk有问题', link: '/api-examples' },
          { text: 'node-sass需要依赖的python环境无法安装', link: '/upload-big-file' }
        ]
      },
      {
        text: '英语学习',
        items: [
          { text: '渲染机制', link: '/markdown-examples' },
          { text: '事件循环', link: '/api-examples' },
          { text: '', link: '/upload-big-file' }
        ]
      },
      {
        text: 'vscode插件',
        items: [
          { text: '渲染机制', link: '/markdown-examples' },
          { text: '事件循环', link: '/api-examples' },
          { text: '', link: '/upload-big-file' }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
