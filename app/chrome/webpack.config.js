'use strict'

const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const distPath = path.join(__dirname, '../../dist/chrome')

module.exports = {
  context: __dirname,
  entry: {
    'content': './content/index.js',
    'options': ['./options/index.js', './options/index.html']
  },
  output: {
    path: distPath,
    filename: '[name]/index.js'
  },
  resolve: {
    root: path.resolve('./app'),
    alias: {
      shared: path.resolve('./app/shared')
    },
    extensions: ['', '.webpack.js', '.web.js', '.js', '.css', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel?' + JSON.stringify({
          presets: ['es2015'],
          plugins: [
            'transform-object-rest-spread'
          ]
        })
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        loader: 'style!css'
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loader: 'style!css!sass'
      },
      {
        test: /(simplemde\/dist\/simplemde.min.css)$/,
        loader: 'style!css!sass!wrap?betterEditor'
      },
      {
        test: /\.html$/,
        exclude: /(node_modules)/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'manifest.json', to: distPath },
      { from: '../shared/assets/bse-icon.png' }
    ])
  ],
  wrap: {
    betterEditor: {
      before: ['.better-editor {'],
      after: [ '}' ]
    }
  }
}
