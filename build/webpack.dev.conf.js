//基本配置--开发模式

var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path');
var webpack = require('webpack');
// 引入基本配置
var config = require('./webpack.config');

config.output.publicPath = '/';

config.plugins = [
    // 添加三个插件
    //new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin("css/[name].[contenthash].css"),
    new HtmlWebpackPlugin({
        filename: 'app/index.html',
        template: path.resolve(__dirname, '../app/index.html'),
        inject: true
    })
];

// 动态向入口配置中注入 webpack-hot-middleware/client
var devClient = './build/dev-client';
Object.keys(config.entry).forEach(function (name, i) {
    var extras = [devClient]
    config.entry[name] = extras.concat(config.entry[name])
})

module.exports = config;