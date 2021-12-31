const path = require('path')
const utils = require('../utils')

module.exports = {
	common: {
		resolve: {
			extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', 'vue'],
			alias: {
				'@': utils.resolveDirectory('./src/'),
			},
		},
		loader: {
			imagesOutputPath: `images/`,
			imagesFilename: `[name].[hash:8].[ext]`,
			fileOutputPath: `assets/`,
			filename: `[name].[hash:8].[ext]`,
		},
		cssExtract: {
			filename: `styles/style.[name].[hash:8].css`,
			chunkFilename: `styles/chunks.[name].[chunkhash:8].css`,
		},
	},
	client: {
		entry: {
			main: utils.resolveDirectory(`./src/client/index.ts`),
		},
		output: {
			filename: `srcipts/build.[name].[hash:8].js`,
			chunkFilename: `srcipts/chunks.[name].[chunkhash:8].js`, // 异步导入(import)模块被打包后的文件路径定义
		},
		devBuild: {
			htmlWebpackPluginFilename: `./index.html`,
			htmlWebpackPluginTemplate: utils.resolveDirectory(`./src/app/template/index.ejs`),
			/* ... */
			publicPath: `/`,
			pathTag: 'client-dev',
			path() {
				return utils.resolveDirectory(`./dist/${this.pathTag}`)
			},
		},
		prodBuild: {
			htmlWebpackPluginFilename: `./index.html`,
			htmlWebpackPluginTemplate: utils.resolveDirectory(`./src/app/template/index.ejs`),
			/* ... */
			publicPath: '/',
			pathTag: 'client-prod',
			path() {
				return utils.resolveDirectory(`./dist/${this.pathTag}`)
			},
		},
	},
}
