const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// statement below contains a absolute path to current location
// console.log(path.join(__dirname, 'public'));
// entry -> output
// way to expose - grab and expose object

module.exports = (env) => {
	const isProduction = env === 'production';
	const CSSExtract = new ExtractTextPlugin('styles.css');
	return {
		// entry to tell where to start
		entry: './src/app.js',
		// output set to object - define path and filename
		output: {
			path: path.join(__dirname, 'public'),
			filename: 'bundle.js'
		},

		module: {
			rules: [
				{
					loader: 'babel-loader',
					test: /\.js$/, // regex
					exclude: /node_modules/
				},
				{
					test: /\.s?css$/,
					use: CSSExtract.extract({
						use: [
							{ loader: 'css-loader', options: { sourceMap: true } },
							{ loader: 'sass-loader', options: { sourceMap: true } }
						]
					})
				}
			]
		},

		plugins: [ CSSExtract ],
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true
		}
	};
};
