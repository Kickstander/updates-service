const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');

module.exports = env => {
  const envFile = dotenv.config({ path: path.resolve(__dirname, `./.env`) }).parsed;
  const envKeys = Object.keys(envFile).reduce((prev, next) => {
    // eslint-disable-next-line
    prev[`process.env.${next}`] = JSON.stringify(envFile[next]);
    return prev;
  }, {});
  console.log(envKeys);
  return {
    entry: './client/index.jsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public')
    },
    plugins: [new webpack.DefinePlugin(envKeys)],
    resolve: {
      extensions: ['.js', '.jsx']
    },
    watch: env.NODE_ENV === 'development',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    mode: env.NODE_ENV,
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: 'style-loader'
        },
        {
          test: /\.css$/,
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]'
          }
        },
        { test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/, loader: 'url-loader?limit=100000' },
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
};
