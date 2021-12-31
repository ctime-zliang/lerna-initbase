const webpackPaths = require('./webpack.paths')
const webpackRules = require('./webpack.rules')
const webpackPlugins = require('./webpack.plugins')
const webpackOptimization = require('./webpack.optimization')
const webpackStats = require('./webpack.stats')

const webpackConfigBase = {
	name: `client`,
	target: `web`,
	mode: `development`,
	devtool: 'source-map',
	cache: {
		type: `filesystem`,
	},
	entry: {
		client: webpackPaths.client.entry.main,
	},
	output: {
		publicPath: webpackPaths.client.devBuild.publicPath,
		path: webpackPaths.client.devBuild.path(),
		filename: webpackPaths.client.output.filename,
		chunkFilename: webpackPaths.client.output.chunkFilename,
	},
	module: {
		rules: webpackRules(`client`),
	},
	resolve: webpackPaths.common.resolve,
	plugins: [...webpackPlugins.common()],
	optimization: { ...webpackOptimization.common },
	performance: {
		hints: `warning`,
	},
	stats: webpackStats(`client`),
}

module.exports = webpackConfigBase
