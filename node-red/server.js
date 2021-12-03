var http = require('http')
var express = require('express')
var RED = require('node-red')

const settings = require('./settings')

// Create an Express app
var app = express()

// Add a simple route for static content served from 'public'
app.use('/', express.static('public'))

// Create a server
var server = http.createServer(app)

// Initialise the runtime with a server and settings
RED.init(server, settings)

// Serve the editor UI from /red
app.use(settings.httpAdminRoot, RED.httpAdmin)

// Serve the http nodes UI from /api
app.use(settings.httpNodeRoot, RED.httpNode)

server.listen(settings.uiPort)

// Start the runtime
RED.start().then(() =>
	require('child_process').exec(
		`start http://localhost:${settings.uiPort + settings.httpAdminRoot}/`
	)
)

//Admin dashboard ---> http://localhost:8000/admin
