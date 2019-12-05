'use strict';

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const PACKAGE = process.env.PACKAGE = 'ONLINE';

module.exports = {
  context: path.join(__dirname, 'src'),
  stats: {
    cached: true,
    modules: true,
    reasons: true,
    hot: true,
  },
  entry: {   
    loginPage: ['babel-polyfill',      
      'webpack/hot/only-dev-server',
      './index'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
  },
  
  resolve: {
    modules: [ path.resolve(path.join(__dirname, 'src')), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'react-hot-loader',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: { presets: ['react', 'es2015', 'stage-0'] },
        exclude: [/node_modules/]
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },    
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
      
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([
      { from: 'app/assets/css', to: 'app/assets/css' },
    
    ]),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      minimize: true,
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'index.html',
      template: './index.html'
    }),
   
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV),
        'NODE_ENV': JSON.stringify(ENV),
        'PACKAGE': JSON.stringify(PACKAGE)
      }
    }),
   ],
  devServer: {
    hot: true,
    host: 'localhost',
    port: 5000,
    clientLogLevel: 'info'|'error'|'warning',
    contentBase: path.join(__dirname, 'dist'),
  }
};
