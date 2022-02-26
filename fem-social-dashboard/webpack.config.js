const path = require("path");
const htmlWebpackPlugin = require('html-webpack-plugin')
const copyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js",
    clean: true
  },

  devServer: {
    static: "./dist",
    open: false,
  },

  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html'
    }),

  ],

  module: {
    rules: [
      {
        test: /\.s[a|c]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },

      {
        test: /\.(png|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
};
