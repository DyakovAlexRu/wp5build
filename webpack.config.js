const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = false;
const isDev = !isProd;
const filename = (ext) => isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`;

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, "src", "index.html")
      }),
      new CleanWebpackPlugin({
        dry: true
      }),
      new MiniCssExtractPlugin({
        filename: filename('css')
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src/assets/img'),
            to: path.resolve(__dirname, 'dist/assets/img')
          },
          {
            from: path.resolve(__dirname, 'src/assets/fonts'),
            to: path.resolve(__dirname, 'dist/assets/fonts')
          },
          {
            from: path.resolve(__dirname, 'src/assets/icons'),
            to: path.resolve(__dirname, 'dist/assets/icons')
          },
          {
            from: path.resolve(__dirname, 'src/favicon.ico'),
            to: path.resolve(__dirname, 'dist')
          }
        ]
      })
    ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
