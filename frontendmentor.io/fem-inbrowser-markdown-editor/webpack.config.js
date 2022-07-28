const util = require("../../config/webpack.util");
const htmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
  },

  devServer: util.devServer,

  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, "public/index.html"),
      favicon: path.join(__dirname, "public/favicon-32x32.png"),
      title: "Frontend Mentor | in-browser markdown editor",
    }),
  ],

  module: {
    rules: [
      {
        test: util.cssReg,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                auto: /\.module.css$/i,
              },
            },
          },
        ],
      },

      {
        test: util.babelReg,
        use: util.babelLoader,
        exclude: /node_modules/i,
      },

      {
        test: util.imgReg,
        type: "asset/resource",
      },
    ],
  },

  resolve: {
    extensions: util.reactExt,
  },
};
