// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },

  devServer: {
    open: false,
    port: 8080,
    host: "localhost",
  },

  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // I am tired of webpack's shenanigans, and you know what? I use webpack
      // to  realize how complex and unnecessarily sophisticated this "Bundler"
      // is. I've spent 3 hours trying to get images loading in html the way
      // webpack 5 "recommends" and it isn't wokring. I have resorted to using
      // this method which is supposed to be invalidated by "asset/loader" but
      // at least it WORKS!
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
