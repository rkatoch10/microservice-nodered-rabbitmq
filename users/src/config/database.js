import { connect } from 'mongoose'
import { ENV_CONFIG } from './constants'

const url = ENV_CONFIG.mongoUrl || 'mongodb://127.0.0.1:27017/userDB'

export const intializeDB = async () => {
	try {
		await connect(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
        console.log('connection intialized')
		console.log('Connection established with UserService')
	} catch (error) {
        console.log(error)
		console.log('Connection failed')
	}
}
