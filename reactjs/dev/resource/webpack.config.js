const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CleanWebpackPlugin = require('clean-webpack-plugin');

const
  PATH_SOURCE = path.join(__dirname, '/src'),
  PATH_BUILD = path.join(__dirname, '/dist');


module.exports = {

  entry: {
    index: PATH_SOURCE + '/index/index.jsx',
  },
  output: {
    path: PATH_BUILD,
    filename: '[name]/[name].js',
  },

  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              },

              // 제외
              exclude: ['/node_modules']
          },
      ]
  },

  resolve: {
     modules: ['node_modules'],
     extensions: ['.js', '.jsx', '.css', '.scss', '.json'],
  },
};
