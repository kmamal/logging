
const DUMMY_LOGGER = {
	child () { return DUMMY_LOGGER },
	info () {},
	trace () {},
	debug () {},
	warn () {},
	error () {},
	fatal () {},
}

class DummyLogger {
	constructor () { return DUMMY_LOGGER }
}

module.exports = { DummyLogger }
