const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require ('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    teamderjs: './src/projets/projetTeamder/assets/teamder.js',
    teamdercss: './src/projets/projetTeamder/assets/teamder.css',
    teamderpic: './src/projets/projetTeamder/assets/image1.jpeg',
  },
  output: {
    filename: '[name].[contentHash].js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            // Creates `style` nodes from JS strings
            //'style-loader',
            // Compiles Sass to CSS
            //'sass-loader',
        ],
      },
        {
            test: /\.(eot|woff|woff2|svg|ttf|jpe?g)([\?]?.*)$/,
            use: ['file-loader']
        }
    ],
  },
  plugins: [
    new CleanWebpackPlugin,
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/projets/projetTeamder/teamder.html',
      inject: true,
      filename: 'teamder.html',
      chunks: ['teamdercss','teamderjs','teamderpic'],
    }),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  }
};