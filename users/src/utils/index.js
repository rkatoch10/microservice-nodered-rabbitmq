import got from 'got'
import { encryptionClientConfig } from '../config/constants'

export const encryptText = async (data) => {
	try {
		encryptionClientConfig.json.data = data
        console.log(encryptionClientConfig)
		const response = await got.post(encryptionClientConfig).text()
		console.log(response)
		return response
	} catch (error) {
		console.log("**** request error \n", error)
		return undefined
	}
}
