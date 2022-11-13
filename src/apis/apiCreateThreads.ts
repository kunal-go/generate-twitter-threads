import { HttpRestApi } from "http-rest-api"
import * as yup from "yup"
import { MAX_TWEET_BODY_LENGTH } from "../common/constants"
import { generateThreads } from "../common/utils/threads"
import { parseYupSchema } from "../common/utils/yup"

const bodySchema = yup.object({ tweetBody: yup.string().required() }).required()

export const apiCreateThreads = new HttpRestApi({
	method: "post",
	path: "/threads",
	handler: async ({ req }) => {
		const body = await parseYupSchema(bodySchema, req.body)
		const threads = generateThreads(body.tweetBody, MAX_TWEET_BODY_LENGTH)
		return { threads }
	},
})
