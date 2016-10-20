module.exports = {
  context: __dirname + '/app',
  entry: './index',
  output: {
    path: __dirname + '/../public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.js$/,  loader: 'babel', exclude: /node_modules/, query: { presets: ['es2015'] } }
    ],
    resolve: {
      alias: {
        'vue': 'vue/dist/vue.js'
      }
    }
  },
  vue: {
    loaders: {
      js: 'babel',
      sass: 'vue-style-loader!css-loader!sass?indentedSyntax'
    }
  }
};
