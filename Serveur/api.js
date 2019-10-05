const https = require('https')

const config = require('./config.json')


const options = {
  hostname: config.api.domaine,
  port: 443,
  path: config.api.folder,
  method: 'GET'
}

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    var obj = JSON.parse(d);
    process.stdout.write(d);
    console.log('Joueurs actuels :' + obj.players);
  })
})
req.on('error', error => {
  console.error(error)
})

req.end()