/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
//const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const packageJson = require('./package.json');

const [styleLoader, cssLoader, postCssLoader, sassLoader] = [
    "style-loader",
    {
        loader: "css-loader?url=false",
        options: {
            modules: {
                localIdentName: "[path][local]--[hash:base64:5]",
            },
        }
    },
    "postcss-loader",
    "sass-loader",
]

module.exports = (env, {mode}) => {
    const devMode = mode === 'development';

    return {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),

        resolve: {
            modules: ['node_modules', 'src'],
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            plugins: [new TsconfigPathsPlugin({configFile: './tsconfig.json'})],
        },

        output: {
            path: path.join(__dirname, '../'),
            filename: 'bundle.[hash].min.js',
            publicPath: '/',
        },

        devServer: {
            hot: true,
            historyApiFallback: true,
            compress: true,
            port: 3000,
        },

        devtool: 'source-map',

        module: {
            rules: [
                {
                    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                    type: "asset",
                },
                {
                    test: /\.(ts|tsx|js|jsx)?$/,
                    exclude: /node_modules/,
                    use: [{loader: 'ts-loader', options: {transpileOnly: true}}],
                },
                {
                    test: /\.(scss|css)?$/,
                    exclude: /\.module.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
                },
                {
                    test: /\.module.scss$/,
                    use: devMode ? [styleLoader, cssLoader, sassLoader] : [styleLoader, cssLoader, postCssLoader, sassLoader]
                },
            ],
        },

        plugins: [
            new webpack.ProgressPlugin(),
         /*   new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ["../test.js"],
            }),*/
            new CopyPlugin({
                patterns: [
                    {from: "favicon.ico", to: "./favicon.ico"},
                ],
            }),
            /* new MiniCssExtractPlugin({
                 filename: devMode ? '[name].css' : '[name].[hash].css',
                 chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
             }),*/
            new webpack.DefinePlugin({
                VERSION: JSON.stringify(packageJson.version),
            }),
            new HtmlWebpackPlugin({
                template: './index.html',
            }),
        ],
    };
};
