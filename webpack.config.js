const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        })
    ]
}