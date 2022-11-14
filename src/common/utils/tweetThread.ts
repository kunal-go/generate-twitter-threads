export function generateTweetThread(
	text: string,
	maxCharacterLimit: number,
): string[] {
	const tweets: string[] = []

	let startTextIndex = 0
	let tweetNo = 1
	while (startTextIndex < text.length - 1) {
		const endTextIndex = getTweetEndTextIndex({
			text,
			startTextIndex,
			maxCharacterLimit,
			tweetNo,
		})

		const threadText = text.substring(startTextIndex, endTextIndex).trim()
		tweets.push(threadText)
		startTextIndex = endTextIndex
	}

	if (tweets.length === 1) {
		return tweets
	}

	return tweets.map((thread, i) => {
		const threadCounterText = `[${i + 1}/${tweets.length}]`
		return `${threadCounterText} ${thread}`
	})
}

function getTweetEndTextIndex({
	maxCharacterLimit,
	startTextIndex,
	text,
	tweetNo,
}: {
	text: string
	maxCharacterLimit: number
	tweetNo: number
	startTextIndex: number
}): number {
	let reservedCharacterLength = 6
	if (text.length >= 2740) {
		reservedCharacterLength++
	}
	if (tweetNo > 10) {
		reservedCharacterLength++
	}

	const allowedCharacterLength = maxCharacterLimit - reservedCharacterLength

	let endTextIndex = startTextIndex + allowedCharacterLength
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
