const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "./examples/src/index.html"),
    filename: "./index.html"
});
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, "./examples/src/index.js"),
    output: {
        path: path.join(__dirname, "examples/dist/"),
        filename: "react-canvas.[hash:6].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        htmlWebpackPlugin, new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 8080
    }
};
