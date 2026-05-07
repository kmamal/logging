const { Logger } = require('./logger')
const { stringify } = require('./utils')

const logToStream = (stream) =>
	(log) => {
		stream.write(stringify(log))
		stream.write('\n')
	}

class StreamLogger extends Logger {
	constructor (stream, props) {
		super(logToStream(stream), props)
	}
}

module.exports = {
	logToStream,
	StreamLogger,
}
