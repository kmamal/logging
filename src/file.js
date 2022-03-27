const { logToStream, StreamLogger } = require('./stream')

const logToFile = (file) => {
	const stream = file.createWriteStream()
	return logToStream(stream)
}

class FileLogger extends StreamLogger {
	constructor (file) {
		super(logToFile(file))
	}
}

module.exports = {
	logToFile,
	FileLogger,
}
