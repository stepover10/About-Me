const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const glob = require('glob');
const entry = require('webpack-glob-entry')


const PATH_SOURCE = path.join(__dirname, '/src');
const PATH_BUILD = path.join(__dirname, '/dist');


const entryListGlob = () => {
  let lists = {}

  let entrySource = {}
  glob.sync('./src/**/*.js').reduce(function(obj, el){
    entrySource[path.parse(el).name] = [el];
  },{})

  glob.sync('./src/**/*.scss').reduce(function(obj, el){
    if ( entrySource[path.parse(el).name] ) {
      entrySource[path.parse(el).name].push(el)
    } else {
      entrySource[path.parse(el).name] = (el);
    }
  },{});

  return entrySource;
}

module.exports = (env, argv) => {
  const isDevelopmentMode = argv.mode === 'development';

  const config = {
    mode: argv.mode,
    entry: entryListGlob(),
    
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }, {
          test: /\.s?css$/,
          use: [
            MiniCssExtractPlugin.loader,
            { loader: "css-loader", options: { sourceMap: isDevelopmentMode } },
            { loader: "sass-loader", options: { sourceMap: isDevelopmentMode } }
          ]
        }
      ]
    },

    resolve: {
      modules: [path.join(__dirname, 'src'), 'node_modules'],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.json'],
    },

    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name]/[name].css'
      })
    ],

    output: {
      path: PATH_BUILD,
      filename: '[name]/[name].js',
      chunkFilename: '[name]/[name].[chunkhash].chunk.js',
    },

    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    }
  }

  if ( isDevelopmentMode ) {
    config.devtool = 'inline-source-map'
    config.optimization = {
      minimize: false
    }

    config.plugins.push(
			new OptimizeCSSAssetsPlugin({
				cssProcessorOptions: {
					map: {
						inline: false,
            annotation: true,
					}
				}
			}),
		)

  } else {
    config.plugins.push(
      new OptimizeCSSAssetsPlugin({}),
      new CleanWebpackPlugin(['dist'])
    )

    config.optimization = {
      minimize: true
    }
  }

  return config;
}
