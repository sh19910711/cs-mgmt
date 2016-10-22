const path = require('path');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: './main',
  output: { path: __dirname + '/../public/js', filename: 'bundle.js' },
  resolve: {
    root: [path.join(__dirname, 'app', 'lib')],
    alias: { 'vue': 'vue/dist/vue.js' }
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/,  loader: 'babel', exclude: /node_modules/ },
      { test: /\.sass$/, loader: 'style!css!sass' }
    ],
  },
  babel: { presets: ['es2015'] },
  vue: { loaders: { sass: 'style!css!sass?indentedSyntax' } }
};
