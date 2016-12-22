const path = require('path');
module.exports = {
  entry: {
    app: ['./src/index.tsx']
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: 'dist',
    filename: 'bundle.js'    
  },

  // Enable sourcemaps for debugging webpack's output
  devtool: 'source-map',

  devServer: {
    inline: true
  },

  resolve: {
    // Add resolvable extensions
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  module: {
    loaders: [
      // All files with .ts or .tsx extension handled by
      // awesome-typescript-loader
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
    ],

    preLoaders: [
      // All output .js files will have any sourcemaps re-processed by
      // source-map-loader
      { test: /\.js$/, loader: 'source-map-loader' }
    ]
  },

  // Avoids bundling dependencies so browser can cache those libraries
  // between builds
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
};
