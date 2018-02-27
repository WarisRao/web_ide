const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports={
    
    entry:path.join(__dirname,'./src/js/index.js'),
    
    output:{
        path:path.join(__dirname,'./dist/'),
        filename:'bundle.js'
    },
    
    devtool:'inline-source-map',

    devServer:{
        contentBase:"./dist"
    },

    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
        }),
        new ExtractTextPlugin('style.bundle.css'),
    ],

    module:{
        rules:[
            
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:[
                    'babel-loader',
                ],
            },

            {
                test:/\.css$/,
                loader: ExtractTextPlugin.extract({
                    use:'css-loader',
                }),
            },

            {
                test:/.(png|jpg|gif)$/,
                use:[
                    'file-loader'
                ],
            },

        ],
    },

    resolve:{
        extensions:['.js','.jsx'],
    },

};
