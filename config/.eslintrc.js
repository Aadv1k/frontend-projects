module.exports = {
  plugins: ["prettier"],
  env: {
    browser: true,
    commonjs: false,
    es2021: true,
  },

  ignorePatterns: [
    "node_modules/",
    "dist/",
    "prettier.config.js",
    "webpack.config.js",
  ],
};
