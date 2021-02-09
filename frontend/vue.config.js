const path = require('path')
module.exports = {
  outputDir: path.resolve(__dirname, '../backend/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5100'
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/")
      }
    },

    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
  },
  
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Watch Boutique'
      return args
    }),
      config.plugins.delete('prefetch')
  }
}
