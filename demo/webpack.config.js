var path = require("path");
var webpack = require("webpack");
var WebpackBuildNotifierPlugin = require("webpack-build-notifier");
var HtmlWebpackPlugin = require("html-webpack-plugin");


const PATHS = {
  src: __dirname,
  build: path.join(__dirname, './build')
};

module.exports = {

  entry: {
    "app": PATHS.src + '/index.ts'
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.js')
    extensions: ['.ts', '.js']
  },
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: "My Project Webpack Build"
    }),
    new HtmlWebpackPlugin({
      title: 'Webpack boilerplate',
      hash: true,
      filename: 'index.html',
      template: 'index.html'
    })
  ]
};
