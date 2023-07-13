const { join, resolve } = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
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
  plugins: [],
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      [resolve(__dirname, "src/environment/environment.prod.ts")]:
        resolve(__dirname, "src/environment/environment.ts")
    }
  }
};
