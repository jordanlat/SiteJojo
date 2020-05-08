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
    soonCss: './src/assets/comingSoon/comingSoon.css',
    soonJs: './src/assets/comingSoon/comingSoon.js',
    guessnbrjs: './src/projets/projetguessnumber/guessnumber.js',
    guessnbrcss: './src/projets/projetguessnumber/guessnumber.css',
    guessnbrpicleft: './src/projets/projetguessnumber/img/left.png',
    guessnbrpicright: './src/projets/projetguessnumber/img/right.png',
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
            test: /\.(png|eot|woff|woff2|svg|ttf|jpe?g)([\?]?.*)$/,
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
    new HtmlWebpackPlugin({
      template: './src/assets/comingSoon/comingSoon.html',
      inject: true,
      filename: 'comingSoon.html',
      chunks: ['soonCss','soonJs'],
    }),
    new HtmlWebpackPlugin({
      template: './src/projets/projetguessnumber/guessnumber.html',
      inject: true,
      filename: 'guessnumber.html',
      chunks: ['guessnbrjs','guessnbrcss','guessnbrpicleft','guessnbrpicright'],
    }),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  }
};