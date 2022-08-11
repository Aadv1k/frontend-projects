const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const {
  imgReg,
  babelReg,
  babelLoader,
  reactExt,
  devServer
} = require("../../../config/webpack.util");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
  },
  devServer: devServer,

  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "./public/index.html"),
      favicon: path.join(__dirname, "./public/favicon-32x32.png"),
      title: "Frontend Mentor | Interactive card details form",
    }),
  ],

  module: {
    rules: [
      {
        test: babelReg,
        use: babelLoader,
      },
      {
        test: imgReg,
        type: "asset/resource",
      },
    ],
  },

  resolve: {
    extensions: reactExt,
  },
};
