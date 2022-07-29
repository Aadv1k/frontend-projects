const config = require("../../../config/webpack.util");
const windiCssWebpackPlugin = require("windicss-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist/"),
  },

  devServer: config.devServer,

  plugins: [
    new windiCssWebpackPlugin(),
    new htmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html"),
      favicon: path.join(__dirname, "./public/favicon-32x32.png"),
      title: "Frontend Mentor | Pricing Component With Toggle",
    }),
  ],

  module: {
    rules: [
      {
        test: config.cssReg,
        use: config.cssLoader,
      },

      {
        test: config.babelReg,
        use: config.babelLoader,
        exclude: /node_modules/i,
      },

      {
        test: config.imgReg,
        type: "asset/resource",
      },
    ],
  },

  resolve: {
    extensions: config.reactExt,
  },
};
