const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    app: ["@babel/polyfill", "./src/index.js"]
  },
  output: {
    path: path.join(__dirname, '../../build'),
    filename: '[hash].bundle.js',
    publicPath: "/"
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }, {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          
        }
      }, {
        test: /\.js$|jsx/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },
  plugins: [
    new Dotenv({path: "./.env"}),
    new HtmlWebpackPlugin({
      filename: path.resolve("./build/index.html"),
      inject: true,
      template: path.resolve("./public/index.html")
    }),
    new CopyPlugin([
      {
        from: path.resolve("./public/images"),
        to: path.resolve("./build/images")
      }, {
        from: path.resolve("./public/styles"),
        to: path.resolve("./build/styles")
      }
    ], {copyUnmodified: false})
  ],
  devServer: {
    inline: true,
    port: 8082,
    historyApiFallback: true
  }
};