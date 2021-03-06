const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,"public")
    },
    // optimization: {
    //     minimizer: [ new UglifyJsPlugin()]
    // },
    devServer: {
        contentBase: path.join(__dirname,"public"),
        port: 9000
    },
    module: {
        rules:[ 
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use:[
                    {loader: 'url-loader'}
                ]
            }
        ]
    }
}