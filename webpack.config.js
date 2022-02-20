/* jshint esversion: 6 */

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    plugins: [
        new MiniCssExtractPlugin(),
    ],
    mode: "production",
    devtool: "nosources-source-map",
    module: {
        rules: [{
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
};