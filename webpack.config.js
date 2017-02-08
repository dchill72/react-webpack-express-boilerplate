var webpack = require('webpack')
var path = require('path')
var loaders = require('./webpack.loaders')
var HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  app: path.join(__dirname, 'app'),
  public: path.join(__dirname, 'public')
}

const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || '7900'
const BUILD_TYPE = process.env.BUILD_TYPE || 'dev'

console.log('Environment [' + BUILD_TYPE + ']')

var configFile = './config/' + BUILD_TYPE + '.json'
console.log(configFile)

var config = require(configFile)

module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      PATHS.app + '/index.js'
    ]
  },
  devtool: 'eval-source-map',
  output: {
    publicPath: '/',
    path: PATHS.public,
    chunkFilename: '[name]-[hash].js',
    filename: 'bundle-[name]-[hash].js'
  },
  externals: {
    'Config': JSON.stringify(config)
  },
  module: { loaders: loaders },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev'),
        'BUILD_TYPE': JSON.stringify(process.env.BUILD_TYPE || 'dev')
      }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      chunks: ['app'],
      filename: 'index.html',
      template: PATHS.app + '/template.html'
    })
  ]
}