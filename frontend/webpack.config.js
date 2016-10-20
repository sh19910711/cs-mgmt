module.exports = {
  context: __dirname + '/app',
  entry: './index',
  output: { path: __dirname + '/../public/js', filename: 'bundle.js' },
  resolve: {
    alias: { 'vue': 'vue/dist/vue.js' }
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.js$/,  loader: 'babel', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style!css' }
    ],
  },
  babel: { presets: ['es2015'] },
  vue: {
    loaders: { sass: 'vue-style-loader!css-loader!sass?indentedSyntax' }
  }
};
