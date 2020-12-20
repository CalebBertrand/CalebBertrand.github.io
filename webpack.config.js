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
        path: path.resolve(__dirname, "./build")
    },
    devServer: {
        contentBase: './build'
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
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|gif|jpeg|jpg|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'imgs'
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            // global modules
            $: 'jquery',
            jQuery: 'jquery',
            defaultExport: 'slick-carousel'
        }),
        new Inject(() => fs.readFileSync('./assets/js/t.js-master/t.js', {encoding: 'utf-8'}), {
            entryOrder: ENTRY_ORDER.Last
        }),
        new HtmlWebpack({
            template: 'template.html'
        }),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })
    ]
}