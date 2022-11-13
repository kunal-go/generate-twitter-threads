import { expect } from "chai"
import { HttpMethod, HttpStatusCode } from "http-rest-api"
import { httpAgent } from "./setup"

export async function callRestApi({
	method,
	endpoint,
	body,
	query,
	expectedStatusCode = HttpStatusCode.OK,
}: {
	method: HttpMethod
	endpoint: string
	body?: string | object
	query?: string | object
	expectedStatusCode?: HttpStatusCode
}): Promise<any> {
	const client = httpAgent[method](endpoint)

	if (body) client.send(body)
	if (query) client.query(query)

	const response = await client
	expect(response.status).equal(
		expectedStatusCode,
		`${response.body?.name}: ${response.body?.message}  ${response.body?.stack}`,
	)

	return response.body
}
