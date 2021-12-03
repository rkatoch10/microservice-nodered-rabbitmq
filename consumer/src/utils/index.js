import got from 'got'
import { decryptionClientConfig } from '../config/constants'

export const decryptText = async (data) => {
	try {
		decryptionClientConfig.json.data = data
		const response = await got.post(decryptionClientConfig).text()
		console.log(response)
		return response
	} catch (error) {
		console.log(error)
		return undefined
	}
}
