const webpackInitConfig = require('../../../config/webpack/webpack-client.init.config')
const webpackPlugins = require('../../../config/webpack/webpack.plugins')
const webpackDevServerConfig = require('../../../config/webpack/webpack.dev-server.config')

const plugins = [...webpackPlugins.client.devBuild()]
plugins.forEach(item => {
	webpackInitConfig.plugins.push(item)
})

webpackInitConfig.devServer = webpackDevServerConfig.devServer

module.exports = webpackInitConfig
