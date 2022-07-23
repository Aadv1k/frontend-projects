const baseStyleLoader = ["css-loader", "style-loader"].reverse();
const baseResolve = [".wasm", ".ts", ".mjs", ".cjs", ".js", ".json"];

module.exports = {
  devServer: {
    port: process.env.PORT || 8080,
    open: false,
    host: "localhost",
  },

  cssReg: /\.css/i,
  sassReg: /\.s[a|c]ss/i,
  babelReg: /\.jsx?$/i,
  imgReg: /\.(png|svg|jpg|jpeg|gif)$/i,
  fontReg: /\.(woff|woff2|eot|ttf|otf)$/i,

  sassLoader: [...baseStyleLoader, "sass-loader"],
  cssLoader: [...baseStyleLoader],
  babelLoader: ["babel-loader"],
  assetResource: "asset/resource",

  reactExt: [...baseResolve, ".jsx"],
};
