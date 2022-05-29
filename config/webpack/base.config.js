module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: "./dist",
  },

  devServer: {
    open: false,
    port: 8080,
    host: "localhost",
  },
};
