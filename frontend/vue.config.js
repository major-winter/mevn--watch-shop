const path = require('path')
module.exports = {
  devServer: {
    proxy: "http://localhost:5100"
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/")
      }
    }
  }
  // chainWebpack: config => {
  //   config.module
  //     .rule('vue')
  //     .use('vue-loader')
  //     .loader('vue-loader')
  //     .tap(options => merge(options, { transformAssetUrls: { 'img': 'src/assets' } }))

  // }


}
