const path = require('path')
const webpackDevServerConfig = require('../../../config/webpack/webpack.dev-server.config')
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

webpackInitConfig.devServer = webpackDevServerConfig.devServer

module.exports = webpackInitConfig
