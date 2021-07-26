const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    bundle: "./src/controller.js",
    "main/main-bundle": "./src/v1/main/controller.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "v1"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      chunks: ["bundle"],
    }),
    new HtmlWebpackPlugin({
      filename: "main/index.html",
      template: "./src/template.html",
      chunks: ["main/main-bundle"],
    }),
    new CleanWebpackPlugin(),
  ],
  mode: "development",
  devServer: {
    watchContentBase: false,
  },
};
