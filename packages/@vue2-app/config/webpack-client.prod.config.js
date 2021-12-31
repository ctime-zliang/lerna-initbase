const webpackPaths = require('../../../config/webpack/webpack.paths')
const webpackInitConfig = require('../../../config/webpack/webpack-client.init.config')
const webpackPlugins = require('../../../config/webpack/webpack.plugins')
const webpackPluginsLocal = require('./webpack.plugins.local')
const webpackRulesLocal = require('./webpack.rules.local')

const rules = webpackRulesLocal(`client`)
rules.forEach(item => {
	webpackInitConfig.module.rules.push(item)
})
const plugins = [...webpackPlugins.client.prodBuild(), ...webpackPluginsLocal.common(), ...webpackPluginsLocal.client.prodBuild()]
plugins.forEach(item => {
	webpackInitConfig.plugins.push(item)
})

webpackInitConfig.mode = `production`
webpackInitConfig.output = {
	publicPath: webpackPaths.client.prodBuild.publicPath,
	path: webpackPaths.client.prodBuild.path(),
	filename: webpackPaths.client.output.filename,
	chunkFilename: webpackPaths.client.output.chunkFilename,
}

module.exports = webpackInitConfig
