//基本配置

// nodejs 中的path模块
var path = require('path');
// 可以自动将依赖写入html
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: {
    index: path.resolve(__dirname, '../app/index.js'),
    vendors: [
        'Vue'
    ]
},
    // 输出配置
    output: {
        // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, '../output/static'),
        publicPath: '',
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[id].[chunkhash].js'
    },
    resolve: {
        //需要查找的后缀
        extensions: [ '.js', '.vue'],
        alias: {
            'Vue': 'vue/dist/vue.js'
        }
    },
    module: {
        //webpack2.0后语法更改见文档
        rules: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/, 
                use: 'vue-loader'   
            },
            //使用babel-loader编译es6
            {
                test: /\.js$/,
                use: 'babel-loader?presets=es2015',
                exclude: /node_modules/
            },
            // 加载图片
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{loader:'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[ext]?[hash:7]'
                }}]
            },
            { 
                test: /\.css$/, 
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                          loader: 'css-loader'
                        }
                      ]
                })
            },
          {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            use: [{loader:'url-loader',
            options: {
              limit: 10000,
              name: 'fonts/[name].[hash:7].[ext]'
            }}]
          }
        ]
    },
    plugins: [
        
        new HtmlWebpackPlugin({
            filename: 'app/index.html',
            template: path.resolve(__dirname, '../app/index.html'),
            inject: true
        })
    ]
}