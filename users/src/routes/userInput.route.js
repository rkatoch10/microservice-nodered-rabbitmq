import express from 'express'
import * as userInputService from '../services/userInput.service'

const router = express.Router()

router.route('/').post(userInputService.create)

module.exports = router
