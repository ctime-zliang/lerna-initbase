const { merge } = require('webpack-merge')
const webpackLibInitConfig = require('./webpack-lib.init.config')
const rules = require('./webpack-lib.rules')
const utils = require('../utils')

const webpackInitModule = webpackLibInitConfig.module
delete webpackLibInitConfig.module
const webpackConfig = {
	mode: 'development',
	entry: {
		main: utils.resolveDirectory(`./lib/src/2dcanvas/main.ts`),
	},
	output: {
		path: utils.resolveDirectory(`./lib/build`),
		filename: `2dcanvas.js`,
		libraryExport: 'default',
		libraryTarget: 'umd',
		globalObject: 'this',
	},
	module: {
		...webpackInitModule,
		rules: [rules('libDevBuild')],
	},
	devtool: 'source-map',
}

module.exports = merge(webpackConfig, webpackLibInitConfig)
