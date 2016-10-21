const path = require('path');

module.exports = {
  cache: true,
  context: path.join(__dirname, 'app'),
  entry: './main',
  output: { path: __dirname + '/../public/js', filename: 'bundle.js' },
  resolve: {
    alias: { 'vue': 'vue/dist/vue.js' }
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/,  loader: 'babel', exclude: /node_modules/ },
      { test: /\.sass$/, loader: 'style!css!sass' },
      { test: /\.css$/, loader: 'style!css' }
    ],
  },
  babel: { presets: ['es2015'] },
  vue: {
    loaders: { sass: 'vue-style-loader!css-loader!sass?indentedSyntax' }
  }
};
