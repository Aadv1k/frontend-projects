const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "./dist/"),
  },

  devServer: {
    port: 8080,
    open: false,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },

      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
    ],
  },

  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      favicon: "./src/images/favicon-32x32.png",
    }),
  ],
};
