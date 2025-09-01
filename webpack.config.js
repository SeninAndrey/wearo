const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // или 'production' для сборки
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // очищать dist перед сборкой (Webpack 5)
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // расширения для импорта
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // если используете css
        use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    require('@tailwindcss/postcss')
                  ],
                },
              },
            },
          ],
      },
    ],
  },
  devtool: 'inline-source-map', // для удобства отладки
  devServer: {
    static: './dist',
    hot: true,
    open: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
};
