import express from 'express'
import userInputRoutes from './userInput.route'

const router = express.Router()

router.use('/input', userInputRoutes)

module.exports = router