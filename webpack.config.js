module.exports = {
  entry: '/opt/sdk/index.js',
  output: {
    path: '/opt/sdk/dist/',
    filename: 'docker-engine-sdk'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  externals: [{
    superagent: true
  }],
  target: 'node',
  stats: {
    colors: true
  }
}