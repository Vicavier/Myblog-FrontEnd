const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'./',
  outputDir:'dist',
  lintOnSave:false,
  assetsDir:'resources',
  indexPath:'index.html',

})
