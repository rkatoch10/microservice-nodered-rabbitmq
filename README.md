# Microservices demo with Node-red and rabbitMQ

This application contains three different microservices - users, node-red and consumer(rabbitMQ).

## Application flow

- Users microservice contains an api endpoint, by default at http://localhost:4000/api/v1/input
- Using the endpoint you can send a simple string in POST requests, with following body - { "text": "any_string" }
- This endpoint will take the input, pass to an endpoint in node-red flow for encryption. Then it save plaintext and encrypted text in MongoDB. At last, the encrypted text and document id will be added to a queue (rabbitMQ)
- The consumer will take the incoming messages, then pass onto a service which will decrypt the text by calling an endpoint in node-red flow and save plaintext, encrypted text and document id in MongoDB.
- Export documents as Markdown, HTML and PDF

You don't need to separately install node-red for this. It's embeded in node.js application itself. After setup when you do npm run dev, it will open the node-red admin dashboard in your default browser. Or you can manually browse on this link - http://localhost:8000/admin/

## Installation

You should have npm and concurrently (globally) installed. Install npm from here - https://www.npmjs.com/ and then
concurrently (https://www.npmjs.com/package/concurrently) with this command - `npm install -g concurrently`  

Install the dependencies and devDependencies and start the server.

After you `cd` to root folder, do following: 

```sh
cd dillinger
npm i
npm run dev
```
