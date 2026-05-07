
const stringify = (log) => {
	const props = { ...log.props }
	for (const [ key, prop ] of Object.entries(props)) {
		if (prop instanceof Error) {
			props[key] = {
				message: prop.message,
				stack: prop.stack,
			}
		}
	}
	return JSON.stringify({ ...log, props })
}

module.exports = {
	stringify,
}
