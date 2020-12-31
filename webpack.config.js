const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const projectName = 'Webpacker';
const templatePath = 'src/index.template.html';
const indexPath = 'src/js/index.js';


module.exports = {
  entry: path.join(__dirname, indexPath),
  output: { filename: 'main.js' },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
          options: { minimize: true }
        }
      },
      {
        test:/\.(s*)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: { loader: "file-loader" }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: { loader: "file-loader" }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: projectName,
      template: path.join(__dirname, templatePath)
    })
  ],
  devServer: {
    compress: true,
    open: true,
    overlay: true,
    port: 2222
  },
  stats: {
    colors: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  devtool: 'source-map'
};
