const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    bundle: "./src/controller.js",
    "main/main": "./src/v1/main/controller.js",
    "signout/signout": "./src/v1/signout/controller.js",
    "changepwd/changepwd": "./src/v1/changepwd/controller.js",
  },
  output: {
    path: path.resolve(__dirname, "v1"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      chunks: ["bundle"],
    }),
    new HtmlWebpackPlugin({
      filename: "error/index.html",
      template: "./src/v1/error/index.html",
      chunks: [],
    }),
    new HtmlWebpackPlugin({
      filename: "main/index.html",
      template: "./src/template.html",
      chunks: ["main/main"],
    }),
    new HtmlWebpackPlugin({
      filename: "signout/index.html",
      template: "./src/template.html",
      chunks: ["signout/signout"],
    }),
    new HtmlWebpackPlugin({
      filename: "changepwd/index.html",
      template: "./src/template.html",
      chunks: ["changepwd/changepwd"],
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(svg)$/,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [["@babel/plugin-transform-runtime"]],
          },
        },
      },
    ],
  },
};
