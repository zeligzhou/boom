var hotClient = require('webpack-hot-middleware/client')

// 客户端订阅事件，当 event.action === 'reload' 时执行页面刷新
hotClient.subscribe(function (event) {
    cosnole.log("hahahahaha:::"+event.action);
    if (event.action === 'reload') {
        window.location.reload()
    }
})