const movieHandler = require('../controllers/movie_controller')

module.exports = [
  {
    method: 'POST',
    path: '/movies/g/create',
    handler: movieHandler.create
  },
  {
    method: 'GET',
    path: '/movies/l/list',
    handler: movieHandler.getAll
  },
  {
    method: 'GET',
    path: '/movies/g/{movie_id}',
    handler: movieHandler.getById
  },
  {
    method: 'PATCH',
    path: '/movies/g/{movie_id}',
    handler: movieHandler.updateById
  },
  {
    method: 'DELETE',
    path: '/movies/g/{movie_id}',
    handler: movieHandler.removeById
  }
]