const http = require('http')

const port = 8080

const api = require('./api.js')


const server = http.createServer(handleRequest) 

function handleRequest(request, response){
  response.statusCode = 200
  response.setHeader('Content-Type', 'text/html');
  response.end('Le serveur marche parfaitement. Url : ' + request.url);
  console.log("Un utilisateur vient de se connecter avec l'URL " + request.url)
  console.log(api.players)
}

server.listen(port, () => {
  console.log(`Server running at port ${port}`)
})