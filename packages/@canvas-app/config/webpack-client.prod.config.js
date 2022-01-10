const path = require('path')
const webpackPaths = require('../../../config/webpack/webpack.paths')
const webpackInitConfig = require('../../../config/webpack/webpack-client.init.config')
const webpackPlugins = require('../../../config/webpack/webpack.plugins')
const webpackPluginsLocal = require('./webpack.plugins.local')
const injectionWebpackSplitchunk = require('./injection.webpack-splitchunk')

webpackInitConfig.entry.client = path.join(__dirname, '../src/client/index.tsx')

const injectionWebpackSplitchunkRes = injectionWebpackSplitchunk()
webpackInitConfig.optimization.splitChunks.cacheGroups = injectionWebpackSplitchunkRes.cacheGroups

const plugins = [...webpackPlugins.client.devBuild(), ...webpackPluginsLocal.common(), ...webpackPluginsLocal.client.devBuild()]
plugins.forEach(item => {
	webpackInitConfig.plugins.push(item)
})

webpackInitConfig.mode = `production`
webpackInitConfig.output.publicPath = webpackPaths.client.prodBuild.publicPath
webpackInitConfig.output.path = webpackPaths.client.prodBuild.path()

module.exports = webpackInitConfig
