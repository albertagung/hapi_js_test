// Import model
const { Movie } = require('../server/models')
const { Op } = require("sequelize");

// Insert new movie
create = async (req, h) => {
  // Define movie
  let movie = req.payload
  // Define new movie
  let newMovie = {}
  // Create movie
  try {
    newMovie = await Movie.create(movie)
  } catch (err) {
    return h.response({ success: false, message: err.message }).code(500)
  }
  // Return response with status
  return h.response({ success: true, result: newMovie }).code(200)
}

// Get all movies
getAll = async (req, h) => {
  // Define query parameters
  const { offset, limit, search } = req.query
  // Define movies
  let movies = []
  // Define where clause (if user include search query)
  let whereClause = {}
  if (search) {
    whereClause = {
      [Op.or]: [
        {
          title: {
            [Op.iLike]: '%' + search + '%'
          }
        },
        {
          author: {
            [Op.iLike]: '%' + search + '%'
          }
        }
      ]
    }
  }
  // Get movies
  try {
    movies = await Movie.findAll({
      offset: offset,
      limit: limit,
      where: whereClause
    })
  } catch (err) {
    return h.response({ success: false, message: err.message }).code(500)
  }
  // Return response with status
  return h.response({ success: true, result: movies }).code(200)
}

// Get movie by id
getById = async (req, h) => {
  // Define payload
  const { movie_id } = req.params
  // Define movie
  let movie = null
  // Get movie from database
  try {
    movie = await Movie.findOne({
      where: {
        id: movie_id
      }
    })
    movie ? movie : movie = 'Not found'
  } catch (err) {
    return h.response({ success: false, message: err.message }).code(500)
  }
  // Return response with status
  return h.response({ success: true, result: movie }).code(200)
}

// Update movie by id
updateById = async (req, h) => {
  // Define movie id
  const { movie_id } =  req.params
  // Define updated data
  const updatedData = req.payload
  // Define updated movie
  let updatedMovie = {}
  // Update movie to database
  try {
    updatedMovie = await Movie.update(updatedData, {
      where: {
        id: movie_id
      },
      returning: true
    })
    updatedMovie[0] > 0 ? updatedMovie = updatedMovie[1][0] : updatedMovie = 'Not found'
  } catch (err) {
    return h.response({ success: false, message: err.message }).code(500)
  }
  // Return response with status
  return h.response({ success: true, result: updatedMovie }).code(200)
}

// Delete movie by id
removeById = async (req, h) => {
  // Define movie id
  const { movie_id } =  req.params
  // Define deleted object
  let deleted = movie_id
  // Delete movie from database
  try {
    deleted = await Movie.destroy({
      where: {
        id: movie_id
      }
    })
    deleted > 0 ? deleted = { deleted_id: movie_id } : deleted = 'Not found'
  } catch (err) {
    return h.response({ success: false, message: err.message }).code(500)
  }
  // Return response with status
  return h.response({ success: true, result: deleted }).code(200)
}

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  removeById
}