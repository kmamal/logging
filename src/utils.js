
const stringify = (log) => {
	const { props } = log
	for (const [ key, prop ] of Object.entries(props)) {
		if (prop instanceof Error) {
			props[key] = {
				message: prop.message,
				stack: prop.stack,
			}
		}
	}
	return JSON.stringify(log)
}

module.exports = {
	stringify,
}
