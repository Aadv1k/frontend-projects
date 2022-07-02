const config = require('../../config/webpack.config.js')
const htmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: "development",

  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist/')
  },

  devServer: config.devServer,

  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, 'public/index.html')
    })
  ],

  module: {
    rules: [
      config.loader.babel,
      config.loader.css,
      config.loader.imgs
    ]
  },

  resolve: {
    extensions: config.resolveReact
  }
}
