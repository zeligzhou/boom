// 引入必要的模块
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.dev.conf')
var opn = require('opn')

// 创建一个express实例
var app = express()
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(client){
  client.on('init', function(){
    console.log("---------------init in io")
  });
  client.on('disconnect', function(){
    console.log("---------------disconnect in io")
  });
  client.on('sendMsg', function(data){
    console.log("---------------receive msg in io : "+data);
    io.emit('backMsg', "back to Zelig");
  });
  
});

// 调用webpack并把配置传递过去
var compiler = webpack(config)

// 使用 webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)

// webpack插件，监听html文件改变事件
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        // 服务器发布事件
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

// 注册中间件
app.use(devMiddleware)
// 注册中间件
app.use(hotMiddleware)

// 监听 8888端口，开启服务器
server.listen(8888, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:8888')
    opn("http://localhost:8888/app/index.html");
})
