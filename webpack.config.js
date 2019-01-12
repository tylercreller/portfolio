const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = env => {
	const isProduction = env === 'production';
	const MiniCssExtract = new MiniCssExtractPlugin({ filename: 'styles.css' });
	const TextCompression = new CompressionPlugin({ test: /\.js$/, deleteOriginalAssets: true });
	const plugins = [MiniCssExtract];
	if (isProduction) {
		plugins.push(TextCompression);
	}
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
					use: [
						{
							loader: MiniCssExtractPlugin.loader,
							options: {
								sourceMap: true
							}
						},
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
		mode: isProduction ? 'production' : 'development',
		plugins: plugins,
		devtool: isProduction ? false : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true,
			publicPath: '/dist/'
		}
	};
};
