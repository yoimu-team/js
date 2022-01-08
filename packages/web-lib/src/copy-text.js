export const copyText = value => {
	const copy = typeof value === 'number' ? String(value) : value
	if (typeof copy !== 'string') {
		console.warn('copyText: value 必須為 number 或 string')
	} else {
		const input = document.createElement('input')
		document.body.prepend(input)
		input.value = copy
		input.select()
		input.setSelectionRange(0, copy.length)
		document.execCommand('copy')
		input.remove()
	}
	return copy
}
