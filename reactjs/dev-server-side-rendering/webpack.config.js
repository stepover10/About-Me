const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;

const PATH_SOURCE = path.join(__dirname, '/src');
const PATH_BUILD = path.join(__dirname, '/dist');

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';
  const config = {
    entry: {
      vendor: [
        'react', 'react-dom', 'react-router-dom'
      ],
      main: `${PATH_SOURCE}/main/main.js`
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          },
        },
        {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDev ? true : false
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDev ? true : false
              },
            }
          ],
        }
      ]
    },

    output: {
      path: PATH_BUILD,
      filename: '[name]/[name].js',
      chunkFilename: '[name]/[name].chunk.js',
    },

    resolve: {
      modules: [
        path.join(__dirname, 'src'),
        'node_modules'
      ],
      extensions: ['.js', '.jsx', '.css', '.scss', '.json'],
    },

    plugins: [
      new ReactLoadablePlugin({
        filename: './dist/react-loadable.json',
      }),
      new MiniCssExtractPlugin({filename: '[name]/[name].css'})
    ]
  }

  if ( isDev ) {
    config.devtool = 'inline-source-map'
  } else {
    config.plugins.push(
      new OptimizeCSSAssetsPlugin({})
    )
  }

  return config
}












