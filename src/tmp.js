const { Dir } = require('./dir')
const Fs = require('node:fs')
const Os = require('node:os')
const Path = require('node:path')

const _name = Path.basename(process.argv[0])
const _file = `${_name}-${process.pid}-`
const _prefix = Path.join(Os.tmpdir(), 'log', _file)
const _path = Fs.mkdtempSync(_prefix)
const _dir = new Dir(_path)

console.warn(`logging to ${_path}`)

class TmpLogger {
	constructor (name, props) {
		return _dir.createFileLogger(name, props)
	}
}

module.exports = { TmpLogger }
