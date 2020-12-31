const webpack = require('webpack'),
      path = require("path"),
      fs = require("fs"),
      Inject = require('webpack-inject-plugin').default, { ENTRY_ORDER } = require('webpack-inject-plugin'),
      HtmlWebpack = require('html-webpack-plugin'),
      { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: path.resolve(__dirname, './js/app.js'),
    output: {
        filename: "app.[contentHash].js",
        path: path.resolve(__dirname, "./docs")
    },
    devServer: {
        contentBase: './docs'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // {
            //     test: /\.html$/,
            //     use: {
            //         loader: 'html-loader',
            //         options: {
            //             interpolate: 'require'
            //         }
            //     }
            // },
            {
                test: /\.(png|gif|jpeg|jpg|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'imgs',
                        esModule: false
                    }
                }
            },
            {
                test: /\.(woff|eot|ttf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'fonts'
                    }
                }
            },
            {
                test: /\.pdf$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'documents',
                        esModule: false
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            // global utils
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new Inject(() => fs.readFileSync('./js/vendor/t.js-master/t.js', {encoding: 'utf-8'}), {
            entryOrder: ENTRY_ORDER.Last
        }),
        new HtmlWebpack({
            template: 'template.html'
        }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })
    ]
}