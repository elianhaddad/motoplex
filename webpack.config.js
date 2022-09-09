/* eslint-disable global-require */
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const {
    TOKEN,
    ASSETS_API,
    CLIENT_SIDE_ID_CAPTCHA
} = process.env;

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: {
        app: [
            'react-hot-loader/patch',
            'webpack-hot-middleware/client',
            './src'
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules')],
        extensions: ['.wasm', '.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
            'react-dom': '@hot-loader/react-dom',
            '@actions': path.resolve(__dirname, './src/core/actions'),
            '@Api': path.resolve(__dirname, './src/Api'),
            '@components': path.resolve(__dirname, './src/components'),
            '@constants': path.resolve(__dirname, './src/constants'),
            '@core': path.resolve(__dirname, './src/core'),
            '@helpers': path.resolve(__dirname, './src/helpers'),
            '@model': path.resolve(__dirname, './src/model'),
            '@root': __dirname,
            '@selectors': path.resolve(__dirname, './src/core/selectors'),
            '@util': path.resolve(__dirname, './src/util'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@models': path.resolve(__dirname, './src/models'),
            '@images': path.resolve(__dirname, './src/images'),
            '@theme': path.resolve(__dirname, './src/theme')
        },
        fallback: {
            fs: false,
            stream: false,
            process: false
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
                plugins: ['react-hot-loader/babel'],
                cacheDirectory: '.babel-cache',
                presets: ['@babel/react']
            }
        }, {
            test: /\.(sa|sc|c)ss$/,
            use: ['css-hot-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }, {
            exclude: [
                /\.html$/,
                /\.(mjs|js|jsx)$/,
                /\.json$/,
                /\.s?css$/,
                /\.(jpg|png)/
            ],
            loader: 'url-loader',
            options: {
                name: '[name].[ext]', limit: 10000
            }
        }, {
            test: /\.(jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
            options: {name: '[name].[ext]'}
        }]
    },
    optimization: {splitChunks: {chunks: 'all'}},
    plugins: [
        new webpack.DefinePlugin({
            TOKEN: JSON.stringify(TOKEN),
            VERSION: JSON.stringify(require('./package.json').version),
            ASSETS_API: JSON.stringify(ASSETS_API),
            CLIENT_SIDE_ID_CAPTCHA: JSON.stringify(CLIENT_SIDE_ID_CAPTCHA),
            PROJECT_NAME: JSON.stringify(require('./package.json').name)
        }),
        new HtmlWebpackPlugin({
            title: require('./package.json').description,
            template: path.resolve('public', 'template.html'),
            favicon: 'public/favicon.ico',
            filename: path.resolve(__dirname, 'dist', 'index.html'),
            inject: 'body',
            hash: true,
            alwaysWriteToDisk: true
        }),
        new webpack.ProvidePlugin({process: 'process/browser'}),
        new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin(),
        new webpack.ProgressPlugin()
    ]
};
