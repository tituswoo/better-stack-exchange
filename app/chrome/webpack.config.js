'use strict'

const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const distPath = path.join(__dirname, '../../dist')

module.exports = {
  context: __dirname,
  entry: './content/index.js',
  output: {
    path: distPath,
    filename: 'index.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'manifest.json', to: path.join(distPath, 'chrome/')}
    ])
  ]
}
