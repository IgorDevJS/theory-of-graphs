module.exports = {
  entry: './entry.js',
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 3333,
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
      },
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        },
      ],
    }],
  },
  mode: 'development',
};
