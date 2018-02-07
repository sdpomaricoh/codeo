const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
	entry: [
		'./src/js/main.js',
		'./src/sass/main.scss'
	],
	output: {
		path: path.resolve(__dirname, './assets'),
		filename: 'js/main.bundle.min.js',
	},
	module: {
		rules: [
			{
				test: /\.(sass|scss)$/,
				use: ExtractTextPlugin.extract({
					use: ['css-loader','sass-loader'],
					fallback: 'style-loader'
				})
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader','eslint-loader']
			}
		]
	},
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, './assets'),
		compress: true,
		proxy: {
			'/': 'http://localhost:2368'
		},
		port: 3000
	},
	plugins: [
		new webpack.ProvidePlugin({
  			$: 'jquery',
  			jQuery: 'jquery',
  			moment: 'moment'
		}),
		new ExtractTextPlugin({
			filename: 'css/main.css',
			allChunks: true
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: isProduction
		})
	]
};

if(isProduction){
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin()
	)
}