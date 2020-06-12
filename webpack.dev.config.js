'use strict'

const P = require('path'),
    MCEP = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './reactAppSrc/entry.jsx',
    output: {
        path: P.resolve('./public/built/'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: MCEP.loader,
                    options: {
                        publicPath: '/public/built/',
                    },
                }, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                use: [{
                    loader: MCEP.loader,
                    options: {
                        publicPath: '/public/built/',
                    },
                }, 'css-loader'],
            }
        ]
    },
    plugins: [new MCEP()]
}