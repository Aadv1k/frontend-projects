const config = require("../../../config/webpack.util");
const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
  },
  devServer: {
    open: false,
    port: 8080,
  },

  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
      title: "Frontend Mentor | Single-page design portfolio coding challenge",
    }),
  ],

  module: {
    rules: [
      {
        test: config.babelReg,
        use: config.babelLoader,
      },
      {
        test: config.sassReg,
        use: [
          {loader: "style-loader"},
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                auto: /\.module.scss$/i,
              }
            },
          },
          {loader: "sass-loader"},
        ],
      },
      {
        test: config.imgReg,
        type: "asset/resource",
      },
    ],
  },

  resolve: {
    extensions: config.reactExt
  }
};
