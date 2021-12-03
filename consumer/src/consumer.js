import express, { json } from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import { intializeDB } from './config/database'
import { connectAMQP } from './config/rabbit'

import { ENV_CONFIG } from './config/constants'

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(json())

intializeDB()
connectAMQP()

const port = ENV_CONFIG.port || 4000

app.listen(port, () => {
	console.log(`Listening: http://localhost:${port}`)
	console.log('Up and running user service')
})
