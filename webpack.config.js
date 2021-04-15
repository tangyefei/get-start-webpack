const path = require('path');

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