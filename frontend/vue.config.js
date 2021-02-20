const path = require('path')
module.exports = {
  outputDir: path.resolve(__dirname, '../backend/public'),
  devServer: {
    proxy: 'http://localhost:5100'
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/")
      }
    },

    devtool: false,

    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },

    optimization: {
      splitChunks: {
        name:'hehe',
        chunks: 'all',
        minSize: 10000,
        maxSize: 25000,
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
