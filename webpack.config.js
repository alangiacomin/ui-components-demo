const webpack = require('webpack');
const path = require('path');
// const apiMocker = require('connect-api-mocker');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
// const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

// const hasBundleAnalyzer = process.env.BUNDLE_ANALYZER === 'true';

module.exports = {
  optimization: {
    removeAvailableModules: true,
    providedExports: true,
    splitChunks: {
      chunks: 'async',
      minSize: 40000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '_',
      name: true,
      cacheGroups: {
        default: {
          chunks: 'async',
          minSize: 40000,
          minChunks: 1,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },
  cache: true,
  entry: {
    bundle: './resources/js/app',
    // style: './resources/sass/app.scss',
  },
  devtool: 'source-map',
  output: {
    path: path.join(`${__dirname}/public/js`),
    filename: 'app.js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/public/js/',
    // jsonpFunction: 'Isee',
    // devtoolModuleFilenameTemplate: 'Isee://[namespace]/[resource-path]?[loaders]',
  },
  mode: 'development',
  // plugins: [].concat(
  //   hasBundleAnalyzer ? new BundleAnalyzerPlugin() : [],
  //   new LodashModuleReplacementPlugin(),
  //   new webpack.optimize.OccurrenceOrderPlugin(),
  //   new ExtractTextPlugin({
  //     filename: '../../Content/[name].css',
  //     disable: false,
  //     allChunks: true,
  //   }),
  //   new DuplicatePackageCheckerPlugin({
  //     emitError: false,
  //   }),
  // ),
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match both .js and .jsx files
        exclude: [/node_modules\/!(framework-ui-components)/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: false }],
              ["@babel/preset-react", { runtime: "automatic" }],
              // 'stage-2'
            ],
            // plugins: ['lodash'],
          },
        },
      },
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract(
      //     {
      //       fallback: 'style-loader',
      //       use: ['css-loader', 'sass-loader'],
      //       publicPath: '../../Content/',
      //     },
      //   ),
      // },
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
    // alias: {
    //   // soluzione per risolvere conflitti di versione
    //   isarray: path.resolve(__dirname, 'node_modules/isarray'),
    // },
  },
  // devServer: {
  //   contentBase: path.join(__dirname, 'wwwroot'),
  //   publicPath: '/App/Dist/',
  //   writeToDisk: true,
  //   compress: true,
  //   port: 7999,
  //   before(app) {
  //     app.use('/', apiMocker({
  //       target: 'App/mock/api/',
  //       nextOnNotFound: true,
  //     }));
  //   },
  //   proxy: [{
  //     // specificare il subpath delle chiamate da inoltrare al mock server
  //     context: [
  //       '/Dichiarazione',
  //     ],
  //     target: 'http://localhost:17999',
  //   }],
  // },
};
