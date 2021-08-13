
const webpack = require('webpack')
const config = require('../config/webpack.config')

const compiler = webpack(config)

const app = require('express')()


app.use(require('webpack-dev-middleware')(compiler, {
	publicPath: config.output.publicPath
}))

app.use(require("webpack-hot-middleware")(compiler))

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
