const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    bundle: "./src/controller.js",
    main: "./src/v1/main/controller.js",
    error: "./src/v1/error/controller.js",
    signout: "./src/v1/signout/controller.js",
    changepwd: "./src/v1/changepwd/controller.js",
  },
  target: ["web", "es5"],
  output: {
    path: path.resolve(__dirname, "v1"),
    filename: "[name].[contenthash].js",
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
      template: "./src/template.html",
      chunks: ["error"],
    }),
    new HtmlWebpackPlugin({
      filename: "main/index.html",
      template: "./src/template.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      filename: "signout/index.html",
      template: "./src/template.html",
      chunks: ["signout"],
    }),
    new HtmlWebpackPlugin({
      filename: "changepwd/index.html",
      template: "./src/template.html",
      chunks: ["changepwd"],
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
