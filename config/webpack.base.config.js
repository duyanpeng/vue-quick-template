const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry:  './index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/, use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader:'postcss-loader'
                    }
                ]
            },
            {
                test: /\.less$/, use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader:'postcss-loader'
                    },{
                        loader:'less-loader'
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
                use: [
                    {
                        loader: 'vue-loader',
                        options: {}
                    }
                ]

            }
        ]

    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}
