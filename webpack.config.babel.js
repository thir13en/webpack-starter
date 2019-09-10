import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const projectName = 'JSCamp 2019 slides';
const templatePath = 'src/index.template.html';
const indexPath = 'src/js/index.js';

module.exports = {
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
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
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
  entry: {
    app: path.join(__dirname, indexPath)
  },
  devServer: {
    compress: true,
    open: true,
    overlay: true,
    port: 2222
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map'
};
