module.exports = {
  publicPath: "//localhost:9002/",
  // css在所有环境下，都不单独打包为文件。这样是为了保证最小引入（只引入js）
  css: {
      extract: false
  },
  configureWebpack: {
      output: {
          library: "salary",
          libraryTarget: "window",
          filename: '[name].js',
          chunkFilename: '[name].chunk.js',
      }
  },
  devServer: {
      port: 9002,
      contentBase: './',
      compress: true,
  }
}