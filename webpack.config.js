var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./docs/js/main.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/.jsx?$/, /.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015', 'react']]
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
