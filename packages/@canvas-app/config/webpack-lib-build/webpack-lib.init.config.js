const path = require('path')
const webpack = require('webpack')
const { ESBuildPlugin } = require('esbuild-loader')
const { DtsBundlePlugin } = require('./webpack-lib.plugins.utils')

const webpackLibInitConfig = {
	target: 'web',
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.jsx'],
	},
	module: {},
	plugins: [
		new ESBuildPlugin(),
		new webpack.ProgressPlugin(),
		new DtsBundlePlugin({
			name: `2dcanvas`,
			rootPath: path.join(process.cwd(), './build/@types'),
			entry: './2dcanvas/main.d.ts',
			output: '../2dcanvas.d.ts',
		}),
	],
}

module.exports = webpackLibInitConfig
