var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  devtool: debug ? 'cheap-eval-source-map' : null,
  entry: './script.js',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  },
  output: {
    path: __dirname + '/client/js',
    filename: 'scripts.min.js'
  },
  devServer: {
    contentBase: './client',
    historyApiFallback: true,
    inline: true
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle : false, sourcemap : false })
  ]
};
