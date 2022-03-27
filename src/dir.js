const { FileLogger } = require('./file')
const Fs = require('fs')
const Path = require('path')
const Os = require('os')

class Dir {
	constructor (dir) {
		this._dir = dir
		if (this._dir) {
			Fs.mkdirSync(dir, { recursive: true })
		} else {
			const prefix = Path.join(Os.tmpdir(), `logs-${process.pid}-`)
			this._dir = Fs.mkdtempSync(prefix)
			console.warn(`logging to ${this._dir}`)
		}
		this._names = new Set()
	}

	createFileLogger (name, options) {
		if (this._names.has(name)) {
			const error = new Error("logger exists")
			error.name = name
			throw error
		}

		const path = Path.join(this._dir, name)
		return new FileLogger(path, options)
	}
}

module.exports = { Dir }
