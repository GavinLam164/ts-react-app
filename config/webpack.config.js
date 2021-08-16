
const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: [
		'react-hot-loader/patch',
		'webpack-hot-middleware/client',
		'./src/main.tsx'
	],
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundler.js',
		publicPath: '/'
	},
	module: {
		rules: [
			{
				test: /\.less$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							modules: {
								mode: (resourcePath) => {
									if(/global\.less$/.test(resourcePath) || /antd\.less$/.test(resourcePath)) {
										return 'global'
									}
									return 'local'
								},
								localIdentName: '[name]__[local]--[hash:base64:5]',
								exportLocalsConvention: 'camelCase',
							}
						}
					},
					{
						loader: 'less-loader',
						options: {
							lessOptions: {
								javascriptEnabled: true
							}
						}
					},
					{
						loader: 'postcss-loader'
					}
				]
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
					{
						loader: 'eslint-loader',
						options: {
							fix: true
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json'],
		alias: {
      'react-dom': '@hot-loader/react-dom',
			'@components': path.resolve(__dirname, '../src/components')
    },
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlPlugin({
			template: 'index.html',
			filename: 'index.html'
		})
	]
}
