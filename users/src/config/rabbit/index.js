const amqp = require('amqplib')
import { ENV_CONFIG } from '../constants'
var channel, connection

export const connectAMQP = async () => {
	try {
		connection = await amqp.connect(ENV_CONFIG.amqpsUrl)
		channel = await connection.createChannel()
		await channel.assertQueue('consumer')
	} catch (ex) {
		console.error('*****AMQP error \n', ex)
	}
}

export const createConsumerMessage = async (data) => {
	await channel.sendToQueue('consumer', Buffer.from(JSON.stringify(data)))
	//use if you want to close the channel after first message is sent
	// await channel.close()
	// await connection.close()
}
