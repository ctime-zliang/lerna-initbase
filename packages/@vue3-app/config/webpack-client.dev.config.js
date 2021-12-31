const webpackPaths = require('../../../config/webpack/webpack.paths')
const webpackInitConfig = require('../../../config/webpack/webpack-client.init.config')
const webpackPlugins = require('../../../config/webpack/webpack.plugins')
const webpackDevServerConfig = require('../../../config/webpack/webpack.dev-server.config')
const webpackPluginsLocal = require('./webpack.plugins.local')
const webpackRulesLocal = require('./webpack.rules.local')

const rules = webpackRulesLocal(`client`)
rules.forEach(item => {
	webpackInitConfig.module.rules.push(item)
})
const plugins = [...webpackPlugins.client.devBuild(), ...webpackPluginsLocal.common(), ...webpackPluginsLocal.client.devBuild()]
plugins.forEach(item => {
	webpackInitConfig.plugins.push(item)
})

webpackInitConfig.mode = `development`
webpackInitConfig.output = {
	publicPath: webpackPaths.client.devBuild.publicPath,
	path: webpackPaths.client.devBuild.path(),
	filename: webpackPaths.client.output.filename,
	chunkFilename: webpackPaths.client.output.chunkFilename,
}
webpackInitConfig.devServer = webpackDevServerConfig.devServer

module.exports = webpackInitConfig
