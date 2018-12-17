const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PATH_SOURCE = path.join(__dirname, '/src');
const PATH_BUILD  = path.join(__dirname, '/dist');

module.exports = (env, argv) => {

  const isBuild = argv.mode === 'production'

  return({
    devtool: 'inline-source-map',

    entry: {
      // vendor: ["react", "react-dom"],
      header: PATH_SOURCE + '/header/header.js',
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react"
              ]
            }
          }]
        },
        {
          test: /\.s?css$/,
          use: [
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                }
              },{
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
          ],
        }
      ]
    },

    output: {
      path: PATH_BUILD,
      filename: '[name]/[name].js',
      // chunkFilename: '[name]/[name].chunk.js'
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]/[name].css'
        }),
        isBuild ? new OptimizeCSSAssetsPlugin({}) : 'dev'
    ],

    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.css', '.scss', '.json'],
    },

    devServer: {
      port: 8000,
      inline: true,
      // hot: true,
      publicPath: '/dist/',
      contentBase: './'
    }
  })
}
