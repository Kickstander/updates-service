const path = require('path');

module.exports = {
  entry: './client/app.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public')
  },
  watch: true,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};