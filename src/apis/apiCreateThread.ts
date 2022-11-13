import { HttpRestApi } from "http-rest-api"
import * as yup from "yup"
import { MAX_TWEET_BODY_LENGTH } from "../common/constants"
import { generateTweetThread } from "../common/utils/tweetThread"
import { parseYupSchema } from "../common/utils/yup"

const bodySchema = yup.object({ tweetBody: yup.string().required() }).required()

export const apiCreateThread = new HttpRestApi({
	method: "post",
	path: "/threads",
	handler: async ({ req }) => {
		const body = await parseYupSchema(bodySchema, req.body)
		const tweets = generateTweetThread(
			body.tweetBody,
			MAX_TWEET_BODY_LENGTH,
		)
		return { tweets }
	},
})
