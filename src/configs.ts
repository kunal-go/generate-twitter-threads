import dotenv from "dotenv"
import path from "path"

let isEnvLoaded = false
loadEnvVariables()

export default {
	environment: process.env.NODE_ENV || "development",
	port: validateServerPortNo(process.env.PORT),
}

function loadEnvVariables() {
	if (isEnvLoaded) {
		return
	}

	const envFilePath = path.join(__dirname, "..", ".env")
	const { error } = dotenv.config({ path: envFilePath })
	if (error) {
		console.error(`Failed to load environment variables: ${error.message}`)
		return
	}

	console.log(`Environment variables loaded`)
	isEnvLoaded = true
}

function validateServerPortNo(port?: string): number {
	if (!port) {
		throw new Error("PORT environment variable is not set")
	}

	const result = Number(process.env.PORT)
	if (Number.isNaN(result)) {
		throw new Error("PORT environment variable is not numeric value")
	}
	return result
}
