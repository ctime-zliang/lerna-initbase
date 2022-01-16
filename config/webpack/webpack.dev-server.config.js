const path = require('path')

const devConfig = {
	ptotocol: 'http',
	host: '127.0.0.1',
	port: 0,
}

module.exports = {
	devConfig,
	devServer: {
		contentBase: path.join(__dirname, './src'),
		disableHostCheck: true,
		host: devConfig.host,
		port: devConfig.port,
		compress: true,
		progress: true,
		hot: true,
		open: false,
		inline: true,
		watchContentBase: true,
		historyApiFallback: true,
		writeToDisk: false,
		headers: {
			Cookie: `sessionKey=webpacdevsessionKey; PATH=/;`,
		},
	},
}
