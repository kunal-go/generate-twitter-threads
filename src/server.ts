import { HttpServer, express } from "http-rest-api"
import cors from "cors"
import configs from "./configs"

export default async function server() {
	const app = new HttpServer(configs.port)
	app.use(cors())
	app.use(express.json())
	app.use(express.urlencoded({ extended: true }))

	app.listen().then((port) =>
		console.log(
			`Server started on port ${port} in ${configs.environment} mode`,
		),
	)

	return app
}
