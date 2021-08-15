
const webpack = require('webpack')
const config = require('../config/webpack.config')
const path = require('path')
const compiler = webpack(config)
const express = require('express')

const app = express()

app.use(require('webpack-dev-middleware')(compiler, {
	publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.use('/', require('connect-history-api-fallback')())

app.use(express.static(path.resolve(__dirname, '../dist')))

compiler.run(() => {
	app.listen(3001, (error) => {
		if(error) {
			console.log('has error')
			process.exit(0)
			return
		}
		console.log('listen 3001')
	})
})
