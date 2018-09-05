const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');

// call dotenv and it will return an Object with a parsed key
const env = dotenv.config().parsed;

// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: ['@babel/polyfill','./src/index.js'],
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'index_bundle.js'
  },
  devServer: {
   historyApiFallback: true
 },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        loaders: 'style-loader!css-loader'
      },

      {
        test: /\.(png|jpg|gif|svg|ttf|woff|eot)$/i,
        use: 'url-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyWebpackPlugin([
      {from: './public/'}
    ]),
    new webpack.DefinePlugin(envKeys)
  ]
}
