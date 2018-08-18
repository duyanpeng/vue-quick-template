const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/, use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },

            {
                test: /\.vue$/,
                use:[
                    {
                        loader: 'vue-loader',
                options: {}
                    }
                ]
                
            }
        ]
        
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.common.js'
        }
    },
    devServer: {
        overlay: true,
        disableHostCheck: true,
        port: 9000
    }
}