const jsEsbuildLoader = {
	test: /\.(js|jsx)$/,
	exclude: /node_modules/,
	loader: 'esbuild-loader',
	options: {
		loader: 'jsx',
		target: 'es2015',
		jsxFactory: 'React.createElement',
		jsxFragment: 'React.Fragment',
	},
}

const tsEsbuildLoader = {
	test: /\.(ts|tsx)$/,
	exclude: /node_modules/,
	loader: 'esbuild-loader',
	options: {
		loader: 'tsx',
		target: 'es2015',
		jsxFactory: 'React.createElement',
		jsxFragment: 'React.Fragment',
		tsconfigRaw: require('../../tsconfig.json'),
		minify: false,
		minifyWhitespace: false,
		sourcemap: true,
	},
}

const tsLoader = {
	test: /\.(ts|tsx)$/,
	exclude: /node_modules/,
	loader: 'ts-loader',
}

module.exports = type => {
	return {
		libProdBuild: {
			oneOf: [
				jsEsbuildLoader,
				tsLoader,
				// tsEsbuildLoader
			],
		},
		libDevBuild: {
			oneOf: [jsEsbuildLoader, tsEsbuildLoader],
		},
	}[type]
}
