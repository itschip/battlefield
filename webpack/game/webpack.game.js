const webpack = require('webpack');
const path = require('path');
const RemovePlugin = require('remove-files-webpack-plugin');

const buildPath = path.resolve(__dirname, '../../dist');

const client = {
  entry: './src/game/client.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimize: true,
  },
  resolve: {
    extensions: ['.js, .ts']
  },
  plugins: [
    new RemovePlugin({
      before: {
        include: [path.resolve(buildPath, 'client')]
      },
      watch: {
        include: [path.resolve(buildPath, 'client')]
      }
    })
  ],
  output: {
    path: path.resolve(buildPath, 'client'),
    filename: 'client.js'
  }
}

const server = {
  entry: './src/game/server.ts',

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.js, .ts']
  },
  plugins: [
    new RemovePlugin({
      before: {
        include: [path.resolve(buildPath, 'server')]
      },
      watch: {
        include: [path.resolve(buildPath, 'server')]
      }
    })
  ],
  output: {
    path: path.resolve(buildPath, 'server'),
    filename: 'server.js'
  },
  target: 'node'
}


module.exports = [client, server]