var webpack = require('webpack')

module.exports = {
  entry: {
    Sample: './src/Sample',
  },
  output: {
    libraryTarget: 'umd',
    library: 'Sample',
    path: './dist/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  externals: [
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    },
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    {
      'moment': {
        root: 'moment',
        commonjs2: 'moment',
        commonjs: 'moment',
        amd: 'moment'
      }
    },
    {
      'react-onclickoutside': {
        root: 'OnClickOutside',
        commonjs2: 'react-onclickoutside',
        commonjs: 'react-onclickoutside',
        amd: 'react-onclickoutside'
      }
    }
  ],
  node: { Buffer: false },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
