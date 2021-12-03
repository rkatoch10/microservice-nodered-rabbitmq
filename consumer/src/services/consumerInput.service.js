import { model } from 'mongoose'
import { decryptText } from '../utils/index.js'

import '../models/consumerInput.model.js'

const ConsumerInput = model('consumerinputs')

export const create = async (data) => {
	try {
		const { id: userInputId, encryptedText } = data
		const text = await decryptText(encryptedText)
		console.log(text)
		const consumerInput = new ConsumerInput({
			userInputId,
			text,
			encryptedText,
		})
		const savedConsumerInput = await consumerInput.save()
		return savedConsumerInput
	} catch (err) {
		console.log(err)
		return undefined
	}
}
