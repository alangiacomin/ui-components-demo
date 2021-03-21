const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      maxInitialRequests: Infinity,
      name: 'vendor',
      cacheGroups: {
        vendor: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
        },
      },
    },
  },
  entry: {
    app: './resources/js/index',
    style: './resources/sass/app.scss',
  },
  devtool: 'source-map',
  output: {
    path: path.join(`${__dirname}/public/js`),
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/public/js/',
  },
  mode: 'development',
  // plugins: [].concat(
  //   new MiniCssExtractPlugin(),
  // ),
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match both .js and .jsx files
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: false }],
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      // {
      //   test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: [{
      //     loader: 'file-loader',
      //     options: {
      //       name: '[name].[ext]',
      //       outputPath: '../../Content/fonts/',
      //     },
      //   }],
      // },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
