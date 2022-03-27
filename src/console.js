const { Logger } = require('./logger')

const _levels = {
	10: { str: "TRACE", method: console.log },
	20: { str: "DEBUG", method: console.log },
	30: { str: "INFO", method: console.log },
	40: { str: "WARN", method: console.warn },
	50: { str: "ERROR", method: console.error },
	60: { str: "FATAL", method: console.error },
}

const logToConsole = (log) => {
	const { str, method } = _levels[log.level]
	const date = new Date(log.timestamp)
	method(`[${date}] ${str}:`, ...log.msg, log.props)
}

class ConsoleLogger extends Logger {
	constructor () {
		super(logToConsole)
	}
}

module.exports = {
	logToConsole,
	ConsoleLogger,
}
