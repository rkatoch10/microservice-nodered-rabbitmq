const mongoose = require('mongoose')

mongoose.model('userinputs', {
	text: {
		type: String,
		required: true,
	},
	encryptedText: {
		type: String,
		required: true,
	},
})
