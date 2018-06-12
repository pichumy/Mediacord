const path = require('path');
module.exports = env => {

  return {
    context: __dirname,
    entry: './frontend/Mediacord.jsx',
    output: {
      path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx', '*']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      ]
    },
    devtool: 'source-map'
  };
}
