const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
	const isProduction = env === 'production';
	const CSSExtract = new ExtractTextPlugin('styles.css');

	return {
		entry: './src/app.js',
		output: {
			path: path.join(__dirname, 'public', 'dist'),
			filename: 'bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/
				},
				{
					test: /\.s?css$/,
					use: CSSExtract.extract({
						use: [
							{
								loader: 'css-loader',
								options: {
									sourceMap: true
								}
							},
							{
								loader: 'sass-loader',
								options: {
									sourceMap: true
								}
							}
						]
					})
				},
				{
					test: /\.(png|jpg|gif)$/i,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 8192
							}
						}
					]
				}
			]
		},
		plugins: [CSSExtract],
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true,
			publicPath: '/dist/'
		}
	};
};
