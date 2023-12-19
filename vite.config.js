import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
import { pageName } from './settings.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin({
    include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
  }), createHtmlPlugin({
    minify: true,
    /**
     * 需要注入 index.html ejs 模版的数据
     */
    inject: {
      data: {
        title: pageName,   // 出现在模版中的 <%- title %>
        injectScript: `<script src='./inject.js'></script>` // 出现在模版中的<%- injectScript %>
      },
      tags: [
        {
          injectTo: 'body-prepend',
          tag: 'div',
          attrs: {
            id: 'tag'
          }
        }
      ]
    }
  })],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  base: './',
  server: {
    hostname: '127.0.0.1',
    open: true, // 如果需要在服务启动后自动打开页面可以打开这个设置
    port: 7005, // 端口
    https: false // 启用https
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8000',
    //     changeOrigin: true
    //   }
    // }
  }
})
