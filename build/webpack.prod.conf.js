//基本配置--产品模式，缺css和js压缩

var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path');
var webpack = require('webpack');
// 引入基本配置
var config = require('./webpack.config');



config.plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    // 压缩代码
    /*new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),*/
    new webpack.optimize.CommonsChunkPlugin({
         name: 'vendors',
         filename: 'js/vendors.js',
     }),
    //new webpack.optimize.OccurenceOrderPlugin(),
    // 提取css为单文件
    new ExtractTextPlugin("css/[name].[contenthash].css"),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, '../app/index.html'),
        inject: true
    })
];

module.exports = config;