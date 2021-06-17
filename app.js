// Dotenv
require('dotenv').config()

const Hapi = require('hapi');

// Import routes
const movie = require('./routes/movie')
 
const server = Hapi.server({
  port: 3000,
  host: 'localhost'
})
 
const init = async () => {
  server.route(movie)
  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}
 
process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})
 
init()