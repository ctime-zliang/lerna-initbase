const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const { TypedCssModulesPlugin } = require('typed-css-modules-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { ESBuildPlugin } = require('esbuild-loader')
const webpackPaths = require('./webpack.paths')
const utils = require('../utils')

const htmlWebpackPluginOptions = {
	title: `React Application`,
	inject: true,
	hash: false,
	cache: true,
	showErrors: true,
	minify: {
		minifyCSS: true,
		minifyJS: true,
	},
}

const miniCssExtractPluginOptions = {
	ignoreOrder: false,
	attributes: { id: `link${new Date().getTime()}` },
}

module.exports = {
	common() {
		return [
			new WebpackManifestPlugin({ fileName: 'manifest.json' }),
			new ESBuildPlugin(),
			new MiniCssExtractPlugin({
				...miniCssExtractPluginOptions,
				filename: webpackPaths.common.cssExtract.filename,
				chunkFilename: webpackPaths.common.cssExtract.stylesSheetChunkFilename,
			}),
			new CaseSensitivePathsPlugin(),
			new TypedCssModulesPlugin({
				globPattern: 'src/**/*.(css|less|sass)',
			}),
			new webpack.ProgressPlugin(),
		]
	},
	client: {
		devBuild() {
			return [
				new webpack.DefinePlugin({
					'process.env.NODE_ENV': JSON.stringify('development'),
				}),
				new HtmlWebpackPlugin({
					...htmlWebpackPluginOptions,
					filename: webpackPaths.client.devBuild.htmlWebpackPluginFilename,
					template: webpackPaths.client.devBuild.htmlWebpackPluginTemplate,
				}),
				new webpack.HotModuleReplacementPlugin(),
			].filter(Boolean)
		},
		prodBuild() {
			return [
				new webpack.DefinePlugin({
					'process.env.NODE_ENV': JSON.stringify('production'),
				}),
				new HtmlWebpackPlugin({
					...htmlWebpackPluginOptions,
					filename: webpackPaths.client.prodBuild.htmlWebpackPluginFilename,
					template: webpackPaths.client.prodBuild.htmlWebpackPluginTemplate,
				}),
				new BundleAnalyzerPlugin({
					analyzerPort: 0,
				}),
			].filter(Boolean)
		},
	},
}
