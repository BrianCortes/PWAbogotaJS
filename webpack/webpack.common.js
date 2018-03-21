import HtmlWebpackPlugin from 'html-webpack-plugin';
const path = require('path');

export const PATHS = {
  root: path.join(__dirname, '..'),
  app: path.join(__dirname, '..', 'app'),
  build: path.join(__dirname, '..', 'build'),
  worker: path.join(__dirname, '../worker'),
};

const commonConfig = {
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'prettier-webpack-loader',
            options: {
              printWidth: 80,
              tabWidth: 2,
              useTabs: false,
              semi: true,
              singleQuote: true,
              trailingComma: 'es5',
              jsxBracketSameLine: false,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [PATHS.app, '../node_modules'],
  },
};

export default commonConfig;
