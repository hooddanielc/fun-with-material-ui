const path = require('path');
const nodeModulesDir = path.join(__dirname, 'node_modules');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: './app.jsx'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'), // `__dirname` is root of the project
    watchOptions: {
      ignored: /node_modules/
    },
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              plugins: [
                '@babel/plugin-proposal-object-rest-spread'
              ],
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        ]
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              plugins: [
                '@babel/plugin-proposal-object-rest-spread'
              ],
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      },
      {
        test : /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]_[local]__[hash:base64:4]',
                sourceMap: true,
            },
          },
          {
            loader: 'resolve-url-loader',
            options: {sourceMap: true},
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [nodeModulesDir],
            },
          }
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {test: /\.woff$/, loader: 'url?limit=10240&mimetype=application/font-woff'},
      {test: /\.ttf$/, loader: 'url?limit=10240&mimetype=application/x-font-ttf'},
      {test: /\.eot$/, loader: 'url?limit=10240&mimetype=application/vnd.ms-fontobject'}

    ]
  }
};
