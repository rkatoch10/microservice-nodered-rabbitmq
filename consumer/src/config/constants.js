require('dotenv').config()

export const ENV_CONFIG = {
	encryptionClient: process.env.ENCRYPTION_CLIENT,
	amqpsUrl: process.env.AMQPS_URL,
	port: process.env.PORT,
	mongoUrl: process.env.MONGO_URL,
}

export const decryptionClientConfig = {
	prefixUrl: ENV_CONFIG.encryptionClient,
	headers: {
		'Content-Type': 'application/json',
	},
	json: { type: 'dec', data: undefined },
}
