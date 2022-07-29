const config = require("../../../config/webpack.util");
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
    new htmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
    }),
  ],

  module: {
    rules: [
      {
        test: config.babelReg,
        use: config.babelLoader,
        exclude: /node_modules/i,
      },

      {
        test: config.cssReg,
        use: config.cssLoader,
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
