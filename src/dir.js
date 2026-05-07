const { FileLogger } = require('./file')
const Fs = require('node:fs')
const Path = require('node:path')

class Dir {
	constructor (dir) {
		this._dir = dir
		Fs.mkdirSync(dir, { recursive: true })
		this._names = new Set()
	}

	createFileLogger (name, props, options) {
		if (this._names.has(name)) {
			const error = new Error("logger exists")
			error.name = name
			throw error
		}
		this._names.add(name)

		const path = Path.join(this._dir, name)
		return new FileLogger(path, props, options)
	}
}

module.exports = { Dir }
