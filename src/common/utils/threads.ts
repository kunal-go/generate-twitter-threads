export function generateThreads(
	text: string,
	maxCharacterLimit: number,
): string[] {
	const threads: string[] = []

	let startTextIndex = 0
	let threadNo = 1
	while (startTextIndex < text.length - 1) {
		const endTextIndex = getThreadEndTextIndex({
			text,
			startTextIndex,
			maxCharacterLimit,
			threadNo,
		})

		const threadText = text.substring(startTextIndex, endTextIndex).trim()
		threads.push(threadText)
		startTextIndex = endTextIndex
	}

	return threads.map((thread, i) => {
		const threadCounterText = `[${i + 1}/${threads.length}]`
		return `${threadCounterText} ${thread}`
	})
}

function getThreadEndTextIndex({
	maxCharacterLimit,
	startTextIndex,
	text,
	threadNo,
}: {
	text: string
	maxCharacterLimit: number
	threadNo: number
	startTextIndex: number
}): number {
	const reservedCharacterCount = threadNo > 10 ? 7 : 6
	const allowedCharacterCount = maxCharacterLimit - reservedCharacterCount

	let endTextIndex = startTextIndex + allowedCharacterCount
	if (endTextIndex >= text.length) {
		return text.length
	}
	if (text.charAt(endTextIndex) === " ") {
		return endTextIndex
	}

	while (text.charAt(endTextIndex) !== " ") {
		endTextIndex = endTextIndex - 1
	}
	return endTextIndex
}
