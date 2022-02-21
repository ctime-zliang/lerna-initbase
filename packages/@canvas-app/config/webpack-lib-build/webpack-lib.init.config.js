const webpack = require('webpack')
const { ESBuildPlugin } = require('esbuild-loader')

const webpackLibInitConfig = {
	target: 'web',
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.jsx'],
	},
	module: {},
	plugins: [new ESBuildPlugin(), new webpack.ProgressPlugin()],
}

module.exports = webpackLibInitConfig
