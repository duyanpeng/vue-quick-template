const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const WebpackBaseConfig = require('./webpack.base.config.js');
const WebpackMerge = require('webpack-merge')

module.exports = WebpackMerge(WebpackBaseConfig,{
    entry:  './index.js',
    mode:'development',
    plugins:[
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
    ],
    devServer: {
        overlay: true,
        disableHostCheck: true,
        port: 9000
    }
})
