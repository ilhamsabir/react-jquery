"use strict";

const path = require('path');
const webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/app/app.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'app.bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [
            {
               test: /.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {   test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader?limit=100000'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
    ],
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      port: 8600
    }
};
