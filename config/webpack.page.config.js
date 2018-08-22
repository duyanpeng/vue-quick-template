const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const WebpackBaseConfig = require('./webpack.base.config.js');
const WebpackMerge = require('webpack-merge')

module.exports = WebpackMerge(WebpackBaseConfig, {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].[chunkhash].js',
    },
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
    ],
    optimization: {
        splitChunks: {
            // chunks:'all'
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
})
