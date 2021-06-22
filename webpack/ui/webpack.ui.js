const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/ui/src/index.tsx',
  output: {
    path: path.join(__dirname, '../../html'),
  },
  devServer: {
    port: 300,
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']],
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.react.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/ui/src/public/index.html',
      minify: {
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        collapseWhitespace: true,
      },
      inject: true,
    }),
  ],
};