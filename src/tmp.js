const { Dir } = require('./dir')
const Fs = require('node:fs')
const Os = require('node:os')
const Path = require('node:path')

const _prefix = Path.join(Os.tmpdir(), `logs-${process.pid}-`)
const _path = Fs.mkdtempSync(_prefix)
console.warn(`logging to ${_path}`)
const _dir = new Dir(_path)

class TmpLogger {
	constructor (name, props) {
		return _dir.createFileLogger(name, props)
	}
}

module.exports = { TmpLogger }
