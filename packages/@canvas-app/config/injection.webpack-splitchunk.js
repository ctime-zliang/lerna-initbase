const path = require('path')

module.exports = () => {
	return {
		cacheGroups: {
			default: {
				name: `common`,
				chunks: `all`,
				minChunks: 2,
				priority: -10,
				reuseExistingChunk: true,
			},
			vendors: {
				test: /[\\/]node_modules[\\/]/,
				name: `vendors`,
				chunks: `all`,
				priority: -9,
				reuseExistingChunk: true,
			},
			public: {
				test: path.resolve('src/app/canvas'),
				name: `public`,
				chunks: `all`,
				priority: -8,
				reuseExistingChunk: true,
				enforce: true,
			},
		},
	}
}
