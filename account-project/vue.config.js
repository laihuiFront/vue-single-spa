// module.exports = {
//   devServer: {
//       port: 9001,     // 端口
//   },
//   lintOnSave: false   // 取消 eslint 验证
// };

module.exports = {
  publicPath: "//localhost:9001/",
  // css在所有环境下，都不单独打包为文件。这样是为了保证最小引入（只引入js）
  css: {
      extract: false
  },
  configureWebpack: {
      output: {
          library: "account",
          libraryTarget: "window",
          filename: '[name].js',
          chunkFilename: '[name].chunk.js',
      }
  },
  devServer: {
      port: 9001,
      contentBase: './',
      compress: true,
  }
}
