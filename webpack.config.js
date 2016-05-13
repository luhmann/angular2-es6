'use strict'

const path = require('path')
const webpack = require('webpack')
let babelPlugins = []

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2015', 'angular2'],
          plugins: babelPlugins
        }
      },
      {
        test: /\.html$/,
        loader: 'raw?minimize=false'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ],
    noParse: [ /.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/ ]
  },
  resolve: {
    root: __dirname,
    extensions: ['', '.js', '.json']
  },
  plugins: [
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify('development')
    })
  ],

  devtool: 'cheap-source-map'
}
