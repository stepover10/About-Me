const webpack = require('webpack');
const path = require('path');
const PATH_SOURCE = path.join(__dirname, '/src');
const PATH_BUILD  = path.join(__dirname, '/dist');


module.exports = {
  mode: "development",
  entry: {
    // vendor: ["react", "react-dom"],
    index: PATH_SOURCE + '/header/header.js',
  },
  output: {
    path: PATH_BUILD,
    filename: '[name]/[name].js',
    chunkFilename: '[name]/[name].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },

  resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.jsx', '.css', '.scss', '.json'],
  },

}
