import * as consumerInputService from '../../services/consumerInput.service'
import { ENV_CONFIG } from '../constants'
const amqp = require('amqplib')
var channel, connection

export const connectAMQP = async () => {
	try {
		connection = await amqp.connect(ENV_CONFIG.amqpsUrl)
		channel = await connection.createChannel()
		await channel.assertQueue('consumer')
		channel.consume('consumer', (data) => {
			const parseData = JSON.parse(data.content)
			console.log(`Received data at ConsumerService: ${parseData}`)
			consumerInputService.create(parseData)
			channel.ack(data)
		})
	} catch (ex) {
		console.error(ex)
	}
}
