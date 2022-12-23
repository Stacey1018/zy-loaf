const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist/umd'),
    // library: 'zt-common-utils',
    library: {
      name: {
        amd: 'zyloaf',
        commonjs: 'zyloaf',
        root: 'zyloaf',
      },
      type: 'umd'
    }
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: []
}
