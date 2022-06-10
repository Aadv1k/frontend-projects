const baseStyleLoader = ["css-loader", "style-loader"].reverse();
const baseResolve = [".wasm", ".ts", ".mjs", ".cjs", ".js", ".json"]

module.exports = {

  devServer: {
    port: process.env.PORT || 8080,
    open: false,
    host: "localhost"
  },

  loader: {
    css: {
      test: /\.css/i,
      use: [...baseStyleLoader],
    },

    scss: {
      test: /\.s[a|c]ss/i,
      use: [...baseStyleLoader, "sass-loader"],
    },

    postcss: {
      test: /\.css/i,
      use: [...baseStyleLoader, "postcss-loader"],
    },

    html: {
      test: /\.htm[l]/i,
      use: ["html-loader"],
    },

    babel: {
      test: /\.jsx?$/i,
      exclude: /node_modules/,
      use: ["babel-loader"],
    },

    imgs: {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: "asset/resource",
    },
  },

  resolveReact: [...baseResolve, '.jsx'],
};

