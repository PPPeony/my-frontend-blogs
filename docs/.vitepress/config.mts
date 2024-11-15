import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的前端学习笔记",
  description: "用来记录我自学前端的过程所写的笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'HTML',
        items: [
          { text: 'HTML 5', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Upload Big File', link: '/upload-big-file' }
        ]
      },
      {
        text: 'JavaScript',
        items: [
          { text: '闭包', link: '/markdown-examples' },
          { text: '作用域和执行栈', link: '/api-examples' },
          { text: '原型与继承', link: '/upload-big-file' },
          { text: '垃圾回收', link: '/upload-big-file' }
        ]
      },
      {
        text: 'CSS',
        items: [
          { text: '居中布局', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
          { text: 'Upload Big File', link: '/upload-big-file' }
        ]
      },
      {
        text: '浏览器',
        items: [
          { text: '渲染机制', link: '/markdown-examples' },
          { text: '事件循环', link: '/api-examples' },
          { text: '浏览器缓存', link: '/upload-big-file' },
          { text: '跨域处理', link: '/upload-big-file' }
        ]
      },
      {
        text: 'Vue 源码分析',
        items: [
          { text: '响应式系统', link: '/markdown-examples' },
          { text: 'diff算法', link: '/api-examples' },
        ]
      },
      {
        text: '构建工具',
        items: [
          { text: 'webpack', link: '/markdown-examples' },
          { text: 'vite', link: '/api-examples' },
        ]
      },
      {
        text: 'Node',
        items: [
          { text: '渲染机制', link: '/markdown-examples' },
          { text: '事件循环', link: '/api-examples' },
          { text: '', link: '/upload-big-file' }
        ]
      },
      {
        text: '常见的业务需求',
        items: [
          { text: '大文件上传', link: '/markdown-examples' },
          { text: '懒加载列表', link: '/api-examples' },
          { text: '', link: '/upload-big-file' }
        ]
      },
      {
        text: '应用安全',
        items: [
          { text: '渲染机制', link: '/markdown-examples' },
          { text: '事件循环', link: '/api-examples' },
          { text: '', link: '/upload-big-file' }
        ]
      },
      {
        text: '工作踩坑',
        items: [
          { text: '渲染机制', link: '/markdown-examples' },
          { text: '事件循环', link: '/api-examples' },
          { text: '', link: '/upload-big-file' }
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
        text: '自建梯子',
        items: [
          { text: '渲染机制', link: '/markdown-examples' },
          { text: '事件循环', link: '/api-examples' },
          { text: '', link: '/upload-big-file' }
        ]
      },
      {
        text: '好用的vscode插件',
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
