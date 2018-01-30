const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: "./src/app.ts",
        vendor: "./src/vendor.js"
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // output directory
        filename: "[name].js" // name of the generated bundle
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.css$/,
                loader: ["style-loader","css-loader"]
            },
            {
                test: /\.ts$/,
                enforce: "pre",
                loader: 'tslint-loader'
            },
            {
                test: /\.scss$/,
                loader: ["style-loader","css-loader","sass-loader"]
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject : "body"
        })
    ]
};