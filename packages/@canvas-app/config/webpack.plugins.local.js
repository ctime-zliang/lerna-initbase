const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')

module.exports = {
	common() {
		return [new ReactRefreshPlugin(), new WebpackManifestPlugin({ fileName: 'manifest.json' })]
	},
	client: {
		devBuild() {
			return []
		},
		prodBuild() {
			return []
		},
	},
}
