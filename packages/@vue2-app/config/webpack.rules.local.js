const path = require('path')

const vueLoader = {
	test: /\.vue$/,
	use: [
		{
			loader: path.resolve(__dirname, '../node_modules/vue-loader'),
			options: {
				preserveWhitepace: true,
				extractCSS: true,
				hotReload: true,
				cssModules: { localIndetName: '[name]_[local]-[hash:base64:5]', camcelcase: true },
				loaders: {
					ts: 'ts-loader',
				},
			},
		},
	],
}

module.exports = type => {
	return {
		client: [vueLoader],
	}[type]
}
