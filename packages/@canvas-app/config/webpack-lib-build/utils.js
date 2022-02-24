const fs = require('fs')
const path = require('path')

module.exports = {
	deleteFolderRecursive(directory) {
		const self = this
		let files = []
		if (fs.existsSync(directory)) {
			files = fs.readdirSync(directory)
			files.forEach((file, index) => {
				const curPath = path.join(directory, file)
				if (fs.statSync(curPath).isDirectory()) {
					self.deleteFolderRecursive(curPath)
				} else {
					fs.unlinkSync(curPath)
				}
			})
			fs.rmdirSync(directory)
		} else {
			console.log(`exec deleteFolderRecursive error: path error.`)
		}
	},
}
