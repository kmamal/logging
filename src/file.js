const { Logger } = require('./logger')
const { logToStream } = require('./stream')
const Fs = require('node:fs')

const logToFile = (file, options) => {
	const stream = Fs.createWriteStream(file, options)
	return logToStream(stream)
}

class FileLogger extends Logger {
	constructor (file, props, options) {
		super(logToFile(file, options), props)
	}
}

module.exports = {
	logToFile,
	FileLogger,
}
