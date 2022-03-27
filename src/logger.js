
class Logger {
	constructor (callback, props = {}) {
		this._callback = callback
		this._props = props
	}

	child (props) {
		return new Logger(this._callback, {
			...this._props,
			...props,
		})
	}

	_log (level, props, args) {
		this._callback({
			timestamp: Date.now(),
			level,
			msg: args,
			props: {
				...this._props,
				...props,
			},
		})
	}

	trace (props, ...args) { this._log(10, props, args) }
	debug (props, ...args) { this._log(20, props, args) }
	info (props, ...args) { this._log(30, props, args) }
	warn (props, ...args) { this._log(40, props, args) }
	error (props, ...args) { this._log(50, props, args) }
	fatal (props, ...args) { this._log(60, props, args) }
}

module.exports = { Logger }
