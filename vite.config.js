const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'home.html'),
        blog: resolve(__dirname, 'blog.html'),
        works: resolve(__dirname, 'works.html'),
        worksdetail: resolve(__dirname, 'worksdetail.html'),

      }
    }
  }
})