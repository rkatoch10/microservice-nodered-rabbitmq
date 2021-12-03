const mongoose = require('mongoose')

mongoose.model('consumerinputs', {
	userInputId: {
		type: String,
		required: true,
	},
	text: { type: String, required: true },
	encryptedText: {
		type: String,
		required: true,
	},
})
