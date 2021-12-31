const webpackPaths = require('../../../config/webpack/webpack.paths')
const webpackInitConfig = require('../../../config/webpack/webpack-client.init.config')
const webpackPlugins = require('../../../config/webpack/webpack.plugins')

const plugins = [...webpackPlugins.client.prodBuild()]
plugins.forEach(item => {
	webpackInitConfig.plugins.push(item)
})

webpackInitConfig.mode = `production`
webpackInitConfig.output.publicPath = webpackPaths.client.prodBuild.publicPath
webpackInitConfig.output.path = webpackPaths.client.prodBuild.path()

module.exports = webpackInitConfig
