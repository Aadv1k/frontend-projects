const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  
  devServer: {
      static: './dist',
      open: false
  },
  
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.template.html",
      filename: "index.html",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.s[a|c]ss$/,
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },

      {
        test: /\.(jpg|jpeg|svg)$/,
        type: "asset/resource",
      },

      {
          test: /\.htm[l]$/,
          use: 'html-loader'
      }
    ],
  },
};
