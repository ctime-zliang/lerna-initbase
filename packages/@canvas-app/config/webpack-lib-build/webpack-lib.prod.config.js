const { merge } = require('webpack-merge')
const webpackLibInitConfig = require('./webpack-lib.init.config')
const rules = require('./webpack-lib.rules')
const utils = require('../../../../config/utils')

const webpackInitModule = webpackLibInitConfig.module
delete webpackLibInitConfig.module
const webpackConfig = {
	mode: 'production',
	entry: {
		main: utils.resolveDirectory(`./src/app/2dcanvas/main.ts`),
	},
	output: {
		path: utils.resolveDirectory(`./build/prod`),
		filename: `2dcanvas.js`,
		libraryExport: 'default',
		libraryTarget: 'umd',
		globalObject: 'this',
	},
	module: {
		...webpackInitModule,
		rules: [rules('libProdBuild')],
	},
}

module.exports = merge(webpackConfig, webpackLibInitConfig)
