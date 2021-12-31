const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
	common() {
		return [new VueLoaderPlugin()]
	},
	client: {
		devBuild() {
			return []
		},
		prodBuild() {
			return []
		},
	},
	server: {
		devBuild() {
			return []
		},
		prodBuild() {
			return []
		},
	},
}
