
const path = require('path');
// statement below contains a absolute path to current location 
//console.log(path.join(__dirname, 'public')); 
// entry -> output
// way to expose - grab and expose object
module.exports = {
    // entry to tell where to start
    entry: './src/app.js',
    // output set to object - define path and filename
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }, 

    module: {
rules:[{
    loader: 'babel-loader',
    test: /\.js$/, // regex
    exclude: /node_modules/
},{
    test:/\.s?css$/,
    use:  [
        'style-loader',
        'css-loader',
        'sass-loader'
    ]
}]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};