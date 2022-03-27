const { Logger } = require('./logger')
const { logToStream } = require('./stream')
const Fs = require('fs')

const logToFile = (file, options) => {
	const stream = Fs.createWriteStream(file, options)
	return logToStream(stream)
}

class FileLogger extends Logger {
	constructor (file, options) {
		super(logToFile(file, options))
	}
}

module.exports = {
	logToFile,
	FileLogger,
}
