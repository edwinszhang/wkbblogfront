var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: {
        app: path.resolve(APP_PATH, 'index.js'),
        //添加要打包在vendors里面的库
        vendors: ['angular', 'angular-route']
    },
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /.*\.(gif|jpe?g|svg)$/i,
                loaders: [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 85}}'
                ]
            }
        ]
    },

    //添加我们的插件 会自动生成一个html文件
    plugins: [
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new HtmlwebpackPlugin({
            template: path.resolve(APP_PATH, 'index.html'),
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    ]
};