const mongo = require('mongoose');

module.exports = mongo.model(
  'Users',
  new mongo.Schema({
    id: String,
    username: String,
    nickname: String,
    raza: String,
    clase: String,
    Rango: String,
    misiones: String,
    nivel: String,
    oro: String,
  })
)