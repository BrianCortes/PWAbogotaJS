import commonConfig, { PATHS } from './webpack.common.js';
import WebpackAssetsManifest from 'webpack-assets-manifest';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import merge from 'webpack-merge';

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development',
});

const cleanOptions = {
  root: PATHS.root,
  verbose: true,
  dry: false,
};

const config = {
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
    ],
  },
  plugins: [
    new CleanWebpackPlugin(PATHS.build, cleanOptions),
    new WebpackAssetsManifest({
      output: 'asset-manifest.json',
    }),
    extractSass,
  ],
};

export default merge(commonConfig, config);
