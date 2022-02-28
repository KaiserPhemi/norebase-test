// third-party libraries
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// configuration
module.exports = {
  entry: path.resolve(__dirname, "src", "index.tsx"),
  devServer: { historyApiFallback: true },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|svg|gif|ico)$/i,
        exclude: /node_modules/,
        use: "file?name=[path][name].[ext]!extract-loader!html-loader",
        include: path.join(__dirname, "assets"),
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  output: {
    filename: "[name].[contenthash:8].min.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: "index.html",
    }),
  ],
};
