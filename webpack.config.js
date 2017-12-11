const webpack = require('webpack'); 
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const $ = require("jquery");

const config = {
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: false
    })
  ]
};

module.exports = config;