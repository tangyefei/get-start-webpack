const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: './dist',
    port: 8090,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'template/index.html')
    })
  ],
  module: {
    rules: [{
      test: /\.js$/, use: 'babel-loader'
    },{
      test: /\.css$/, use: ['style-loader','css-loader']
    }, {
      test: /\.less$/, use: ['style-loader','css-loader', 'less-loader']
    }, {
      test: /\.(png|jpe?g|gif)$/i, loader: 'file-loader'
    }]
  }
}