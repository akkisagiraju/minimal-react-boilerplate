const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const publicPath = path.resolve(__dirname, 'public');
const buildPath = path.resolve(__dirname, 'build');

const config = {
  entry: ['@babel/polyfill', './src/index.js'],
  output: {
    path: buildPath,
    filename: 'main.js'
  },
  devServer: {
    contentBase: publicPath,
    compress: true,
    port: 3000,
    hot: true,
    publicPath: '/',
    historyApiFallback: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.(s*)css$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192 // Convert images < 8kb to base64 strings
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: false,
      template: './public/index.html',
      chunks: ['app'],
      filename: 'index.html'
    })
  ]
};

module.exports = config;
