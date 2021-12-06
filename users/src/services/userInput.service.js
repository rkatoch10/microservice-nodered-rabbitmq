import { model } from 'mongoose'
import { encryptText } from '../utils/index.js'
import { createConsumerMessage } from '../config/rabbit'

import '../models/userInput.model.js'

const UserInput = model('userinputs')

export const create = async (req, res) => {
	try {
		const { text } = req.body
		const encryptedText = await encryptText(text) // node-red
		const userInput = new UserInput({ text, encryptedText })
		const savedUserInput = await userInput.save()
		await createConsumerMessage({ id: userInput._id, encryptedText })
		res.status(200).send(savedUserInput)
	} catch (err) {
		res.send(err.message)
	}
}
