import webpack from 'webpack';
import commonConfig, { PATHS } from './webpack.common.js';
import WebpackPwaManifest from 'webpack-pwa-manifest';
import WebpackAssetsManifest from 'webpack-assets-manifest';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import merge from 'webpack-merge';

const bundles = ['[name].[contenthash]', '[name].[chunkhash]'];
console.log(bundles);
const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development',
  allChunks: true,
});

const cleanOptions = {
  root: PATHS.root,
  verbose: true,
  dry: false,
};

const config = {
  entry: {
    worker: PATHS.worker,
  },
  output: {
    path: PATHS.build,
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
            },
          ],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]',
              publicPath: './images/',
              outputPath: './images/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(PATHS.build, cleanOptions),
    new WebpackAssetsManifest({
      output: 'asset-manifest.json',
    }),
    extractSass,
    // new CopyWebpackPlugin([
    //   { from: PATHS.root + '/bogotaJS.png', to: PATHS.build },
    //   { from: PATHS.root + '/js.png', to: PATHS.build },
    //   { from: PATHS.root + '/error.png', to: PATHS.build },
    //   { from: PATHS.root + '/checked.png', to: PATHS.build },
    // ]),
    new WebpackPwaManifest({
      name: 'BogotaPWA',
      short_name: 'PWA',
      description: 'My awesome Progressive Web App!',
      background_color: '#ffffff',
      theme_color: '#FFC300',
      icons: [
        {
          src: './js.png',
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
        },
      ],
    }),
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    new webpack.optimize.CommonsChunkPlugin({
      names: bundles,
      async: true,
      children: true,
    }),
  ],
};

export default merge(commonConfig, config);
