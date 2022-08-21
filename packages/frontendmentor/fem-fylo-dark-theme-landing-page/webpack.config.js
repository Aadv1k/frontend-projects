const path = require("path");
const config = require("../../../config/webpack.util");
const hwp = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./dist"),
  },
  devServer: config.devServer,
  plugins: [
    new hwp({
      template: path.join(__dirname, "./public/index.html"),
      favicon: path.join(__dirname, "./public/favicon-32x32.png"),
    }),
  ],
  module: {
    rules: [
      {
        test: config.babelReg,
        use: config.babelLoader,
      },
      {
        test: config.imgReg,
        type: "asset/resource",
      },
    ],
  },

  resolve: {
    extensions: config.reactExt,
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
};
