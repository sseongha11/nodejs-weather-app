// npm request - Simplified HTTP client
// npm init or npm init -y that is to create pacakage.json
// npm i request that is to create node_modules (dependencies)
// references: https://darksky.net/dev/account
// Project name : weather app (https://api.darksky.net/forecast/aad4218261844a7026ccbe006588d366/37.8267,-122.4233)
// node app.js on the terminal

const request = require('request')

const url = 'https://api.darksky.net/forecast/aad4218261844a7026ccbe006588d366/37.8267,-122.4233'

request({ url: url }, (error, response) => {
    // console.log(response)
    const data = JSON.parse(response.body)
    console.log(data.currently)
})
