require("dotenv").config();

const path = require("path");

const { ModuleFederationPlugin } = require("webpack").container;

const Dotenv = require("dotenv-webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "public", "index.html"),
});

module.exports = {
  entry: "./src/entry.ts",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "index.bundle.js",
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src/"),
    },
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  devServer: {
    port: 3010,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    htmlPlugin,

    new Dotenv(),

    new ModuleFederationPlugin({
      name: "AuthApplication",
      filename: "auth.remoteEntry.js",
      exposes: {
        "./mount": "./src/mount.tsx",
      },
      shared: {},
      remotes: {},
    }),
  ],
};
