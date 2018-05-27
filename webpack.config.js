const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  mode: 'development',
};

const extractSass = new ExtractTextPlugin({
  filename: 'style.css',
  disable: config.mode === 'development',
});

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
      use: extractSass.extract({
        use: [{
          loader: 'css-loader',
          options: {
            // If you are having trouble with urls not resolving add this setting.
            // See https://github.com/webpack-contrib/css-loader#url
            url: false,
            minimize: config.mode === 'production',
            sourceMap: true,
          },
        }, {
          loader: 'sass-loader',
        }],
        // use style-loader in development
        fallback: 'style-loader',
      }),
    }],
  },
  plugins: [
    extractSass,
  ],
  mode: config.mode,
  devtool: 'source-map',
};
