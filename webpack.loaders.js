module.exports = [
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'babel-loader',
    query: {
      presets: ['es2015', 'react']
    }
  }, {
    test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
    loaders: [
      'style-loader?sourceMap',
      'css-loader'
    ]
  }, {
    test: /[\/\\](app|admin)[\/\\].*\.css$/,
    loaders: [
      'style-loader?sourceMap',
      'css-loader?importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
    ]
  }, {
    test: /\.woff/,
    loader: 'url-loader?prefix=font/&limit=10000&mimetype=application/font-woff'
  },
  {
    test: /\.ttf/,
    loader: 'file-loader?prefix=font/'
  }, {
    test: /\.eot/,
    loader: 'file-loader?prefix=font/'
  }, {
    test: /\.svg/,
    loader: 'file-loader?prefix=font/'
  }, {
    test: /\.gif/,
    loader: 'url-loader?limit=10000&mimetype=image/gif&name=images/[name].[ext]'
  }, {
    test: /\.jpg/,
    loader: 'url-loader?limit=10000&mimetype=image/jpg&name=images/[name].[ext]'
  }, {
    test: /\.png/,
    loader: 'url-loader?limit=10000&mimetype=image/png&name=images/[name].[ext]'
  }, {
    test: /\.json$/,
    loader: 'json-loader'
  }
]
