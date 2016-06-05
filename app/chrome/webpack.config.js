'use strict'

const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const distPath = path.join(__dirname, '../../dist/chrome')

module.exports = {
  context: __dirname,
  entry: {
    'content': './content/index.js'
  },
  output: {
    path: distPath,
    filename: '[name]/index.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          plugins: [
            'transform-object-rest-spread'
          ]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'manifest.json', to: distPath }
    ])
  ]
}
