
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
		filename: 'bundler.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: (resourcePath) => {
									if(/global.css$/.test(resourcePath)) {
										return 'global'
									}
									return 'local'
								},
								localIdentName: '[name]__[local]--[hash:base64:5]',
								exportLocalsConvention: 'camelCase',
							}
						}
					}
				]
			},
			{
				test: /\.tsx?$/,
				loader: 'babel-loader'
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.json'],
		alias: {
      'react-dom': '@hot-loader/react-dom',
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
