const { join } = require('path');
const { optimize } = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    contentPage: join(__dirname, 'src/contentPage.ts')
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    path: join(__dirname, '../angular/dist'),
    filename: '[name].js'
  },
  plugins: [new optimize.AggressiveMergingPlugin()],
  resolve: {
    extensions: ['.ts', '.js']
  }
};
